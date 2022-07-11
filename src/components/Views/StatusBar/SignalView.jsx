import { View, Text } from 'react-native'
import React from 'react'
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./StatusBarStyles";


export default function SignalView({SignalStrength}) {
  return (
    <View style={styles.signalView}>
        <View style={styles.icon3StackStackRow}>
            <View style={styles.icon3StackStack}>
                <View style={styles.icon3Stack}>
                {
                    SignalStrength === 0 ?
                    <MaterialCommunityIconsIcon
                    name="signal-off"
                    style={styles.icon13}
                />:null
                }
                {
                    SignalStrength === 1 ?
                <MaterialCommunityIconsIcon
                    name="signal-cellular-1"
                    style={styles.icon3}
                /> : null 
                }
                {
                    SignalStrength === 2 ?
                <MaterialCommunityIconsIcon
                name="signal-cellular-2"
                style={styles.icon4}
                /> :null
                }
                {
                    SignalStrength >= 3 ?
                    <MaterialCommunityIconsIcon
                    name="signal-cellular-3"
                    style={styles.icon5}
                />: null
                }
                
                </View>
                
            </View>
            
        </View>
    </View>
  )
}