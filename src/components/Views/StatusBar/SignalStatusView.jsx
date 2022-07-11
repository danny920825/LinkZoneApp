import { View, Text } from 'react-native'
import React from 'react'
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./StatusBarStyles";


export default function SignalStatusView({signalStatus}) {
  return (
    <View style={styles.signalTypeView}>
        <View style={styles.icon6StackStack}>
        <View style={styles.icon6Stack}>
          {
            (signalStatus === 1 || signalStatus === 2) ? 
              <MaterialCommunityIconsIcon
            name="signal-2g"
            style={styles.icon6}
            />
            : null
          }
          {
          (signalStatus > 2 &&  signalStatus < 8) ?
          <MaterialCommunityIconsIcon
            name="signal-3g"
            style={styles.icon7}
          />: null
          }   

          {
          (signalStatus >= 8) ? 
            <MaterialCommunityIconsIcon
            name="signal-4g"
            style={styles.icon8}
            />: null
          }
            
            
        
        </View>
        </View>
    </View>
  )
}