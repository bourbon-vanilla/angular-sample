import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DevicesService } from './services/devices.service';
import { IDevice } from './services/idevice';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html'
})
export class DevicesComponent implements OnInit, OnDestroy {

  devices: IDevice[] = [];
  getDevicesSub!: Subscription;


  constructor(private devicesService: DevicesService) { }


  ngOnInit(): void {
    this.getDevicesSub = this.devicesService
      .GetDevices()
      .subscribe(
        device => this.devices.push(device),
        err => console.log(err));
  }

  ngOnDestroy(): void {
    if (this.getDevicesSub)
    {
      this.getDevicesSub.unsubscribe();
      console.log("The observable-substcription 'getDevicesSub' was successfully unsubscribed");
    }
  }

}
