import noble, { type Peripheral } from '@abandonware/noble';
import {
  Injectable,
  Logger,
  type OnModuleDestroy,
  type OnModuleInit,
} from '@nestjs/common';

import { DE900_DEVICE_ADDRESS } from './bluetooth.constants';
import { type BluetoothState } from './bluetooth.types';

@Injectable()
export class BluetoothService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(BluetoothService.name);
  private readonly bluetooth = noble;
  private peripheral: Peripheral;
  private state: BluetoothState;

  /*********************
   * GETTERS & SETTERS *
   *********************/
  public get isBluetoothReady() {
    return this.state === 'poweredOn';
  }

  /***********
   * METHODS *
   ***********/
  public async startScanning() {
    if (!this.isBluetoothReady) {
      return;
    }

    return this.bluetooth.startScanningAsync([], true);
  }

  public async stopScanning() {
    return this.bluetooth.stopScanningAsync();
  }

  /****************************
   * BLUETOOTH EVENT HANDLERS *
   ****************************/
  private async onBluetoothDiscover(peripheral: Peripheral) {
    if (peripheral.address !== DE900_DEVICE_ADDRESS) {
      return;
    }

    // Keep peripheral in memory
    this.peripheral = peripheral;

    // We need to stop scanning before connecting to a peripheral
    await this.stopScanning();

    // Attach event listeners to peripheral
    this.peripheral.on('connect', this.onPeripheralConnect.bind(this));
    this.peripheral.on('disconnect', this.onPeripheralDisconnect.bind(this));

    // Connect to peripheral
    return this.peripheral.connectAsync();
  }

  private async onBluetoothStateChange(state: BluetoothState) {
    // Save state in memory
    this.state = state;

    switch (state) {
      case 'poweredOn':
        this.logger.log('🛜 Bluetooth is powered on');
        return this.startScanning();
      case 'poweredOff':
        this.logger.warn('🪫 Bluetooth is powered off');
        return this.stopScanning();
      case 'resetting':
        this.logger.warn('🔄 Bluetooth is resetting');
        return this.stopScanning();
      case 'unsupported':
        this.logger.error('🚫 Bluetooth is not supported');
        return this.stopScanning();
      case 'unauthorized':
        this.logger.error('🚨 Bluetooth is missing permissions');
        return this.stopScanning();
      case 'unknown':
      default:
        this.logger.error('🤷‍♂️ Bluetooth state is unknown');
        return this.stopScanning();
    }
  }

  private async onBluetoothScanStart() {
    this.logger.log('🛜 Start peripherals scan');
  }

  private async onBluetoothScanStop() {
    this.logger.log('🛜 Stop peripherals scan');
  }

  private async onBluetoothWarning(message: string) {
    this.logger.warn('⚠️ Bluetooth warning', message);
  }

  /***************************************
   * BLUETOOTH PERIPHERAL EVENT HANDLERS *
   ***************************************/
  private async onPeripheralConnect(error: string) {
    if (error) {
      this.logger.error('Failed to connect to peripheral', error);
      return;
    }

    const services = await this.peripheral.discoverServicesAsync();

    for (const [serviceIndex, service] of services.entries()) {
      const isLastService = serviceIndex + 1 === services.length;
      const servicePrefix = isLastService ? '└──' : '├──';

      this.logger.log(
        `${servicePrefix} Service ${service.uuid} (${service.name})`,
      );

      const characteristics = await service.discoverCharacteristicsAsync();

      for (const [charIndex, char] of characteristics.entries()) {
        const isLastChar = charIndex + 1 === characteristics.length;
        const charPrefix = isLastService ? ' ' : '│';
        const charPrefix2 = isLastChar ? '└──' : '├──';

        this.logger.log(
          `${charPrefix}  ${charPrefix2} Char ${char.uuid} (${char.name}) [${char.properties.join(', ')}]`,
        );
      }
    }
  }

  private async onPeripheralDisconnect(error: string) {
    if (error) {
      this.logger.error('Failed to disconnect from peripheral');
      await this.startScanning();
      return;
    }

    this.logger.log('Disconnected from peripheral', this.peripheral.address);
  }

  /*******************
   * LIFECYCLE HOOKS *
   *******************/
  async onModuleInit() {
    this.bluetooth.on('stateChange', this.onBluetoothStateChange.bind(this));
    this.bluetooth.on('discover', this.onBluetoothDiscover.bind(this));
    this.bluetooth.on('scanStart', this.onBluetoothScanStart.bind(this));
    this.bluetooth.on('scanStop', this.onBluetoothScanStop.bind(this));
    this.bluetooth.on('warning', this.onBluetoothWarning.bind(this));
  }

  async onModuleDestroy() {
    await this.stopScanning();
    this.bluetooth.removeListener(
      'stateChange',
      this.onBluetoothStateChange.bind(this),
    );
    this.bluetooth.removeListener(
      'discover',
      this.onBluetoothDiscover.bind(this),
    );
    this.bluetooth.removeListener(
      'scanStart',
      this.onBluetoothScanStart.bind(this),
    );
    this.bluetooth.removeListener(
      'scanStop',
      this.onBluetoothScanStop.bind(this),
    );
    this.bluetooth.removeListener(
      'warning',
      this.onBluetoothWarning.bind(this),
    );
  }
}
