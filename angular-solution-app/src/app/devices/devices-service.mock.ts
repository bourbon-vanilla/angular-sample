import { Injectable } from "@angular/core";
import { DeviceStatus, IDevice } from "./idevice";
import { DevicesService } from "./devices.service";

@Injectable()
export class DevicesServiceMock implements DevicesService {
    
    GetDevices(): IDevice[] {
        return [
            { 
                name: "S7-1500-01", 
                type: "S71500-ABCD-EFGH", 
                state: DeviceStatus.running 
            },
            { 
                name: "S7-1500-02", 
                type: "S71500-ABCD-IJKL", 
                state: DeviceStatus.stopped 
            },
            { 
                name: "S7-1200-01", 
                type: "S71500-ABCD-MNOP", 
                state: DeviceStatus.running 
            },
            { 
                name: "S7-1200-02", 
                type: "S71500-ABCD-QRST", 
                state: DeviceStatus.faulted 
            }
        ];
    }
}
