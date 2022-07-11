import { GetSystemStatus } from "./GetSystemStatus";

export const StatusBarData = async (
    powerStatus, setPowerStatus,signalStatus, setSignalStatus, wifiStatus, setWifiStatus, SignalStrength, setSignalStrength
    ) => {
    GetSystemStatus().then(response => {
      powerStatus !== response.ConnectionStatus ? setPowerStatus(response.ConnectionStatus) : setPowerStatus(powerStatus);
      signalStatus !== response.NetworkType ? setSignalStatus(response.NetworkType) : setSignalStatus(signalStatus);
      wifiStatus !== response.WlanState ? setWifiStatus(response.WlanState) : setWifiStatus(wifiStatus);
      SignalStrength !== response.SignalStrength ? setSignalStrength(response.SignalStrength) : setSignalStrength(response.SignalStrength);
    }).catch("Error al conectarse al dispositivo")
  }