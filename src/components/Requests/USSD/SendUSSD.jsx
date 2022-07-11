import { LinkZoneRequest } from "../Index";

export const SendUSSD = async (ussdCode) => {
    const SendUSSD = await LinkZoneRequest('SendUSSD',  {"UssdContent": ussdCode,"UssdType":1})
    const result = await GetUSSDResult()
    return result
}

const GetUSSDResult = async () => {
    const result = await LinkZoneRequest("GetUSSDSendResult")
    return result
}