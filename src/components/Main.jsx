import { View, Text, } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import AppStatusBar from './Views/StatusBar/AppStatusBar.jsx'
import SMSListView from './Views/SMS/SMSListView.jsx'
import USSDView from './Views/USSD/USSDView.jsx'

export default function Main() {
  return (    
    <View style={{marginTop: Constants.statusBarHeight + 10, flex: 1}}>
      <AppStatusBar />
      <SMSListView style={{flex: 0}}/>
      <USSDView style={{flex: 1, backgroundColor: '#00F'}} />
    </View>
  )
}