import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput, Pressable } from 'react-native'
import { SendUSSD } from '../../Requests/USSD/SendUSSD'


export default function USSDView() {
  const [ussdResponse, setUssdResponse] = React.useState("")
  const [ussdCode, setussdCode] = React.useState("")

  var [height, setHeight] = React.useState(100);
  return (
    <View style={styles.ussdContainer}>
      <Text style={{fontSize: 36, textAlign:'center'}}>Codigos USSD</Text>
      <TextInput 
        style={styles.ussdCode}
        placeholder="Ingrese su Codigo USSD"
        keyboardType="numeric"
        onChangeText={(e)=>(setussdCode(e))}
        />
        <TextInput 
        multiline
        style={[styles.ussdCode, {height: height}]}
        placeholder=""
        value={ussdResponse}
        editable = {false}
        />
      
      <Pressable 
      style={styles.ussdButton}
        onPress={()=>{
          console.log(ussdCode)
          SendUSSD(ussdCode).then(response=>{
            setUssdResponse(response.UssdContent)
          })
          setussdCode("")

        }}
      >
        <Text style={styles.ussdButtonText}>Enviar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  ussdContainer: {
    flex:1,
    backgroundColor: "#dedede"
  },
  ussdCode: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#181818',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal:10,
    marginVertical: 10
  },
  ussdResponse: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#181818',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal:10,
    marginVertical: 10,

  },
  ussdButton: {
    backgroundColor: '#001a4f',
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 10,
    alignSelf: 'center',
    borderRadius: 10
  },
  ussdButtonText: {
    color: '#fff'
  }
})