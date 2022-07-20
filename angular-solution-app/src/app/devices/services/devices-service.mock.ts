import { Injectable } from "@angular/core";
import { DeviceStatus, IDevice } from "./idevice";
import { DevicesService } from "./devices.service";
import { Observable, of } from "rxjs";


@Injectable()
export class DevicesServiceMock implements DevicesService {
    
    GetDevices(): Observable<IDevice> {
        return of({ 
            name: "S7-1500-01", 
            type: "S71500-ABCD-EFGH", 
            state: DeviceStatus.RUN 
        },
        { 
            name: "S7-1500-02", 
            type: "S71500-ABCD-IJKL", 
            state: DeviceStatus.STP 
        },
        { 
            name: "S7-1200-01", 
            type: "S71500-ABCD-MNOP", 
            state: DeviceStatus.RUN 
        },
        { 
            name: "S7-1200-02", 
            type: "S71500-ABCD-QRST", 
            state: DeviceStatus.FLT 
        });
    }
}
