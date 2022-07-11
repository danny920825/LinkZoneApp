import { LinkZoneRequest } from "../Index"

export default TogglePower = async (estado) => {
    let metodo = null
    if(estado === 2){
        metodo = "DisConnect"
    }else{
        metodo = "Connect"
    }
    
    console.log(metodo)

    const result = await LinkZoneRequest(metodo)
    return result
}