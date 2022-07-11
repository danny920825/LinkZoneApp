import axios from 'axios'


const url = "http://192.168.1.1/jrd/webapi"
export const LinkZoneRequest = async (method, params = null, id="1" ) => {
    const payload = {
        jsonrpc:"2.0",
        method:method,
        params:params,
        id:id
    }
   const {data} = await axios.post(url, payload) 
   return  data.result 
}