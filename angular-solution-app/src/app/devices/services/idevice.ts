export interface IDevice {
    name: string,
    type: string,
    state: DeviceStatus
}

export enum DeviceStatus {
    STP = "STOPPED",
    RUN = "RUNNING",
    FLT = "FAULTED"
}
