import { LinkZoneRequest } from "../Index"


export const GetSystemStatus = async () => {
    const request = await LinkZoneRequest("GetSystemStatus")
    return request
}

export const GetUnreadSMS = async () => {
    const request = await LinkZoneRequest("GetSMSStorageState")
    return request.UnreadSMSCount
}