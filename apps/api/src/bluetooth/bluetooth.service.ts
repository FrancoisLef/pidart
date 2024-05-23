import {
  Injectable,
  Logger,
  type OnModuleDestroy,
  type OnModuleInit,
} from '@nestjs/common';
import * as noble from '@stoprocent/noble';
import { type Peripheral as Device } from '@stoprocent/noble';

import { DE900_NAME } from './bluetooth.constants';
import { type BluetoothState } from './bluetooth.types';
// import { type Peripheral } from './peripheral/peripheral';

@Injectable()
export class BluetoothService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(BluetoothService.name);
  private readonly bluetooth = noble;
  // private peripheral: Peripheral;
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
  private async onBluetoothDiscover(device: Device) {
    // Check if peripheral is in the list of devices we are looking for
    if (![DE900_NAME].includes(device.advertisement.localName)) {
      return;
    }

    this.logger.log('🛜 Found peripheral', device);

    // // Keep peripheral in memory
    // this.peripheral = peripheral;

    // this.peripheral = new Peripheral();

    // We need to stop scanning before connecting to a peripheral
    await this.stopScanning();

    // // Attach event listeners to peripheral
    // this.peripheral.once('connect', this.onPeripheralConnect.bind(this));
    // this.peripheral.once('disconnect', this.onPeripheralDisconnect.bind(this));

    // // Connect to peripheral
    // return this.peripheral.connectAsync();
  }

  private async onBluetoothStateChange(state: BluetoothState) {
    // Save state in memory
    this.state = state;

    switch (state) {
      case 'poweredOn':
        this.logger.log('🛜 Bluetooth is ready');
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
    this.logger.log('🛜 Start scanning');
  }

  private async onBluetoothScanStop() {
    this.logger.log('🛜 Stop scanning');
  }

  private async onBluetoothWarning(message: string) {
    this.logger.warn('⚠️ Bluetooth warning', message);
  }

  // /***************************************
  //  * BLUETOOTH PERIPHERAL EVENT HANDLERS *
  //  ***************************************/
  // private async onPeripheralConnect(error: string) {
  //   if (error) {
  //     this.logger.error('Failed to connect to peripheral', error);
  //     return;
  //   }

  //   this.logger.log('Connected to peripheral', this.peripheral.address);

  //   const services = await this.peripheral.discoverServicesAsync();

  //   /**
  //    * LIST SERVICES & CHARACTERISTICS
  //    */
  //   for (const [serviceIndex, service] of services.entries()) {
  //     const isLastService = serviceIndex + 1 === services.length;
  //     const servicePrefix = isLastService ? '└──' : '├──';

  //     this.logger.log(
  //       `${servicePrefix} Service ${service.uuid} (${service.name})`,
  //     );

  //     const characteristics = await service.discoverCharacteristicsAsync();

  //     for (const [charIndex, char] of characteristics.entries()) {
  //       const isLastChar = charIndex + 1 === characteristics.length;
  //       const charPrefix = isLastService ? ' ' : '│';
  //       const charPrefix2 = isLastChar ? '└──' : '├──';

  //       this.logger.log(
  //         `${charPrefix}  ${charPrefix2} Char ${char.uuid} (${char.name}) [${char.properties.join(', ')}]`,
  //       );
  //     }
  //   }

  //   // /**
  //   //  * CONNECT TO SERVICES
  //   //  */
  //   // for (const service of services) {
  //   //   this.logger.log('Connecting to service', service.uuid);

  //   //   const characteristics = await service.discoverCharacteristicsAsync();

  //   //   for (const characteristic of characteristics) {
  //   //     characteristic.on('data', (buffer) => {
  //   //       console.log(buffer);
  //   //       const arr = new Uint8Array(buffer);
  //   //       console.log('BUFFER ARRAY:', arr);

  //   //       const isSmallButtonPressed = arr[8] === 221 && arr[9] === 221;
  //   //       const isMissed = arr[8] === 238 && arr[9] === 238;
  //   //       const isBigButtonPressed = arr[8] === 255 && arr[9] === 255;
  //   //       const isDouble = arr[6] === 13;
  //   //       const isTriple = arr[6] === 11;
  //   //       const isSimple = arr[6] === 12 || arr[6] === 10;
  //   //       const unitValue = arr[7];
  //   //       const decimalValue = arr[8];
  //   //       const value = parseInt(`${decimalValue}${unitValue}`, 10);
  //   //       const isBullsEye = arr[7] === 0 && arr[8] === 14;
  //   //       const isDoubleBullsEye = arr[7] === 0 && arr[8] === 15;

  //   //       if (isSmallButtonPressed) {
  //   //         console.log('-------------------');
  //   //         console.log('Small button pressed');
  //   //         console.log('-------------------');
  //   //       } else if (isBigButtonPressed) {
  //   //         console.log('-------------------');
  //   //         console.log('Big button pressed');
  //   //         console.log('-------------------');
  //   //       } else if (isMissed) {
  //   //         console.log('-------------------');
  //   //         console.log('Missed the target');
  //   //         console.log('-------------------');
  //   //       } else if (isBullsEye) {
  //   //         console.log('-------------------');
  //   //         console.log('Hit the BullsEye', 25);
  //   //         console.log('-------------------');
  //   //       } else if (isDoubleBullsEye) {
  //   //         console.log('-------------------');
  //   //         console.log('Hit the Double BullsEye', 50);
  //   //         console.log('-------------------');
  //   //       } else if (isSimple) {
  //   //         console.log('-------------------');
  //   //         console.log('Hit the value:', value);
  //   //         console.log('-------------------');
  //   //       } else if (isDouble) {
  //   //         console.log('-------------------');
  //   //         console.log('Hit the value:', value * 2);
  //   //         console.log('-------------------');
  //   //       } else if (isTriple) {
  //   //         console.log('-------------------');
  //   //         console.log('Hit the value:', value * 3);
  //   //         console.log('-------------------');
  //   //       }
  //   //     });

  //   //     characteristic.subscribe(() => {
  //   //       console.log('Subscribed to characteristic:', characteristic.uuid);
  //   //     });
  //   //   }
  //   // }
  // }

  // private async onPeripheralDisconnect(error: string) {
  //   if (error) {
  //     this.logger.error('Failed to disconnect from peripheral');
  //     await this.startScanning();
  //     return;
  //   }

  //   this.logger.log('Disconnected from peripheral', this.peripheral.address);
  // }

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
