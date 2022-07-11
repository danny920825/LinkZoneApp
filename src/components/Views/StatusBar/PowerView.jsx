import { View, Text, Pressable } from 'react-native'
import React from 'react'
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./StatusBarStyles";
import TogglePower from '../../Requests/StatusBar/TogglePower';

export default function PowerView({powerStatus, setReload}) {
  const handeOnPress = async () => {
    const result = await TogglePower(powerStatus)
    console.log(result)
    setReload(powerStatus)
  }
  

  return (
    <View style={styles.powerView}>
    <View style={styles.iconStackRow}>
      <Pressable
        onPress={()=>{handeOnPress()}}
      >
      <View style={styles.iconStack}>
        {
          powerStatus === 2 ?
          <FontAwesomeIcon
          name="toggle-on"
          style={styles.icon2}
        /> :
        <FontAwesomeIcon
          name="toggle-off"
          style={styles.icon}
        />
        }
      </View>
      </Pressable>
     
    </View>
  </View>
  )
}