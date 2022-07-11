import React, { Component, useState } from "react";
import { View, StyleSheet } from "react-native";
import PowerView from "./PowerView";
import SignalStatusView from "./SignalStatusView";
import SignalView from "./SignalView";
import { styles } from "./StatusBarStyles";
import WifiStatusView from "./WifiStatusView";
import { GetSystemStatus } from '../../Requests/StatusBar/GetSystemStatus';
import UsersView from "./UsersView";
import { StatusBarData } from "../../Requests/StatusBar/GetAllData";


function AppStatusBar(props) {

  const [powerStatus, setPowerStatus] = React.useState(0)
  const [signalStatus, setSignalStatus] = React.useState(0)
  const [wifiStatus, setWifiStatus] = React.useState(0)
  const [SignalStrength, setSignalStrength] = React.useState(0)
  const [reload, setReload] = useState("")

  

  React.useEffect(()=>{
    StatusBarData(powerStatus, setPowerStatus, signalStatus, setSignalStatus, wifiStatus, setWifiStatus, SignalStrength, setSignalStrength);    
  }, [reload])


  return (
    <View
      style={styles.container}
    >
      <PowerView powerStatus={powerStatus} setReload={setReload} />
      <WifiStatusView wifiStatus={wifiStatus} />
      <SignalStatusView signalStatus={signalStatus} />
      <SignalView SignalStrength={SignalStrength} />
      {/* <UsersView /> */}
    </View>
  );
}




export default AppStatusBar;
