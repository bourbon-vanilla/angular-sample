import { Observable } from "rxjs";
import { IDevice } from "./idevice";


export abstract class DevicesService {

    abstract GetDevices() : Observable<IDevice>;
    
}

