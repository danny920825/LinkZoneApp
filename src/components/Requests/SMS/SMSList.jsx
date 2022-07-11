
import { LinkZoneRequest } from "../Index";

export const GetSMSContactList = async () => {
   const smslist = await LinkZoneRequest("GetSMSContactList", {Page:[0,1]})
   return smslist.SMSContactList
}