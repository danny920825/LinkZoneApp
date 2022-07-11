import { View, Text } from 'react-native'
import React from 'react'
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./StatusBarStyles";


export default function UsersView() {
  return (
    <View style={styles.usersView}>
        <FontAwesomeIcon
        name="users"
        style={styles.icon11}
        ></FontAwesomeIcon>
    </View>
  )
}