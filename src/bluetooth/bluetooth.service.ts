import noble from '@abandonware/noble';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  Inject,
  Injectable,
  Logger,
  type OnModuleDestroy,
  type OnModuleInit,
} from '@nestjs/common';
import { Cache } from 'cache-manager';

import { DE900_DEVICE_ADDRESS } from './bluetooth.constants';
import { type BluetoothState } from './bluetooth.types';

@Injectable()
export class BluetoothService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(BluetoothService.name);
  private readonly bluetooth = noble;
  private state: BluetoothState = 'unknown';

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  /*********************
   * GETTERS & SETTERS *
   *********************/
  public get isInitialized() {
    return this.state === 'poweredOn';
  }

  /***********
   * METHODS *
   ***********/
  public async startScanning() {
    if (!this.isInitialized) {
      this.logger.warn('Bluetooth is not ready');
    }

    this.bluetooth.on('discover', async (peripheral) => {
      if (!(peripheral.address === DE900_DEVICE_ADDRESS)) {
        return;
      }

      this.logger.log(`Discovered DE900 peripheral: ${peripheral}`);
      await this.stopScanning();
    });

    this.bluetooth.startScanning([], true);
  }

  public async stopScanning() {
    return this.bluetooth.stopScanningAsync();
  }

  /********************
   * BLUETOOTH EVENTS *
   ********************/
  private onStateChange(state: BluetoothState) {
    // Save state in memory
    this.state = state;

    switch (state) {
      case 'poweredOn':
        this.logger.log('🛜 Bluetooth is powered on');
        this.startScanning();
        break;
      case 'poweredOff':
        this.logger.warn('🪫 Bluetooth is powered off');
        break;
      case 'resetting':
        this.logger.warn('🔄 Bluetooth is resetting');
        break;
      case 'unsupported':
        this.logger.error('🚫 Bluetooth is not supported');
        break;
      case 'unauthorized':
        this.logger.error('🚨 Bluetooth is missing permissions');
        break;
      case 'unknown':
      default:
        this.logger.error('🤷‍♂️ Bluetooth state is unknown');
        break;
    }
  }

  private onScanStart() {
    this.logger.log('🛜 Scanning bluetooth peripherals…');
  }

  private onScanStop() {
    this.logger.log('🛜 Scanning stopped');
  }

  /*******************
   * LIFECYCLE HOOKS *
   *******************/
  async onModuleInit() {
    this.bluetooth.on('stateChange', (state: BluetoothState) =>
      this.onStateChange(state),
    );
    this.bluetooth.on('scanStart', () => this.onScanStart());
    this.bluetooth.on('scanStop', () => this.onScanStop());
  }

  async onModuleDestroy() {
    this.stopScanning();
    this.bluetooth.removeAllListeners();
  }
}
