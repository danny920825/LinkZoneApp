import { View, Text } from 'react-native'
import React from 'react'
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./StatusBarStyles";

export default function BatteryStatusView() {
  return (
    <View style={styles.batteryStatus}>
    <View style={styles.icon18Stack}>
      <MaterialCommunityIconsIcon
        name="battery-30"
        style={styles.icon18}
      ></MaterialCommunityIconsIcon>
      <MaterialCommunityIconsIcon
        name="battery-10"
        style={styles.icon17}
      ></MaterialCommunityIconsIcon>
      <MaterialCommunityIconsIcon
        name="battery-charging-100"
        style={styles.icon16}
      ></MaterialCommunityIconsIcon>
      <MaterialCommunityIconsIcon
        name="battery"
        style={styles.icon19}
      ></MaterialCommunityIconsIcon>
      <MaterialCommunityIconsIcon
        name="battery-charging-10"
        style={styles.icon14}
      ></MaterialCommunityIconsIcon>
      <MaterialCommunityIconsIcon
        name="battery-charging-40"
        style={styles.icon15}
      ></MaterialCommunityIconsIcon>
    </View>
  </View>
  )
}