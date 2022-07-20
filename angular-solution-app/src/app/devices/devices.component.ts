import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DevicesService } from './services/devices.service';
import { IDevice } from './services/idevice';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices: IDevice[] = [];
  getDevicesSub!: Subscription;

  constructor(private devicesService: DevicesService) { }


  ngOnInit(): void {
    this.getDevicesSub = this.devicesService
      .GetDevices()
      .subscribe(
        device => this.devices.push(device),
        err => console.log(err),
        () => this.getDevicesSub.unsubscribe());
  }

}
