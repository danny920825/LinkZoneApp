import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { GetSMSContactList } from '../../Requests/SMS/SMSList'
import { FlatList } from 'react-native'

export default function SMSListView({style}) {


  const [SMSList, setSMSList] = React.useState([])

  React.useEffect(() => {
    GetSMSContactList().then(response => {
      setSMSList(response)
    })
  }, [])




  return (
    <View style={[style, styles.SMSContainer]} >
      <Text style={{fontSize: 36, textAlign:'center'}}>Ultimos SMS</Text>
      <FlatList data={SMSList} 
      
      renderItem = {({item})=>(
        <View key={item.SMSId}
        style={styles.SMSItem}>
          <Text style={styles.SMSTitle}>
             { item.PhoneNumber[0] }
             
                {
                  item.UnreadCount > 0 ?
                  <View style={styles.SMSUnread}>
                    <Text style={styles.SMSUnreadText}>
                      {item.UnreadCount}
                    </Text>
                  </View>
                  : null
                }
          </Text>
          {/* <Text style={styles.SMSText} > { item.SMSContent }</Text>r */}
        </View>)
      }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  SMSTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181818'
  },
  SMSText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#181818',

  },
  SMSContainer: {
    backgroundColor: "#dedede"
  },
  SMSItem:{
    borderBottomWidth: 2,
    borderBottomColor: '#181818',
    margin:5
  },
  SMSUnread: {
    backgroundColor: '#000035',
    alignItems: 'flex-start',
    marginLeft: 20,
    paddingHorizontal: 10,
    borderRadius: 4
  },
  SMSUnreadText: {
    color: '#fff',
    // fontSize: 22
  }
})