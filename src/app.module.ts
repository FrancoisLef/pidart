import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BluetoothModule } from './bluetooth/bluetooth.module';

@Module({
  imports: [CacheModule.register(), BluetoothModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
