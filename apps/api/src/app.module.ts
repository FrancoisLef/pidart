import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BluetoothModule } from './bluetooth/bluetooth.module';

@Module({
  controllers: [AppController],
  imports: [CacheModule.register(), BluetoothModule],
  providers: [AppService],
})
export class AppModule {}
