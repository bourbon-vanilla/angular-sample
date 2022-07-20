import { IDevice } from "./idevice";


export abstract class DevicesService {

    abstract GetDevices() : IDevice[];
}

