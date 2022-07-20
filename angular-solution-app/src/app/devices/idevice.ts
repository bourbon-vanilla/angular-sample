export interface IDevice {
    name: string,
    type: string,
    state: DeviceStatus
}

export enum DeviceStatus {
    stopped,
    running,
    faulted
}
