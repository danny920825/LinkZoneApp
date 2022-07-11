import { View, Text } from 'react-native'
import React from 'react'
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./StatusBarStyles";

export default function WifiStatusView({wifiStatus}) {
  return (
    <View style={styles.wifiStatusStack}>
        <View style={styles.wifiStatus}>

            {
              wifiStatus === 1 ? 
              <FeatherIcon name="wifi" style={styles.icon9}/>:
              <FeatherIcon name="wifi-off" style={styles.icon10}/>
            }
        </View>
          
    </View>
  )
}