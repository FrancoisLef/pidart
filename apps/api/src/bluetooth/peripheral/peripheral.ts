import { type Peripheral as Device } from '@abandonware/noble';
import { Logger } from '@nestjs/common';

export class Peripheral {
  private readonly logger = new Logger(Peripheral.name);
  private readonly device: Device;

  /***********
   * METHODS *
   ***********/
  public async connect(device: Device) {
    this.logger.log('🎯 Connecting to peripheral', device);
    return this;
  }
}
