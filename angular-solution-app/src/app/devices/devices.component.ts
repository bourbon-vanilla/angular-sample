import { Component, OnInit } from '@angular/core';
import { DevicesService } from './devices.service';
import { IDevice } from './idevice';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices!: IDevice[];


  constructor(private devicesService: DevicesService) { }


  ngOnInit(): void {
    this.devices = this.devicesService
      .GetDevices();
  }

}
