import { Logger } from '@nestjs/common';
import { type Peripheral as Device } from '@stoprocent/noble';

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
