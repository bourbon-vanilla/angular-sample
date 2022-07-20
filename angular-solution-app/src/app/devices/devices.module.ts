import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesServiceMock } from './services/devices-service.mock';
import { DevicesService } from './services/devices.service';


@NgModule({
  declarations: [ DevicesRoutingModule.components ],
  imports: [ CommonModule, DevicesRoutingModule ],
  providers: [
    { provide: DevicesService, useClass: DevicesServiceMock }
  ]
})
export class DevicesModule { }
