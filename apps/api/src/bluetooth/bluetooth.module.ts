import { Module } from '@nestjs/common';

import { BluetoothService } from './bluetooth.service';

@Module({
  providers: [BluetoothService],
})
export class BluetoothModule {}
