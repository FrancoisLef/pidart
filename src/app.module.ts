import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BluetoothService } from './bluetooth/bluetooth.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [AppController],
  providers: [AppService, BluetoothService],
})
export class AppModule {}
