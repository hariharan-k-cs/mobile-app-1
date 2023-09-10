import { Image, ScrollView, StyleSheet, Text ,View } from 'react-native'
import React from 'react'

export default function Contanctlist() {
    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];
  return (
    <View>
      <Text  style={styles.headingtext}></Text>
    <ScrollView
    style={styles.container}
    scrollEnabled={false}>
        {
            contacts.map(({uid,name,status,imageUrl})=>(
                <View key={uid} style={styles.usercard}>
                    <Image
                    source={{
                        uri:imageUrl
                    }}
                    style={styles.userimg}/>
                    <View style={styles.cons}>
                         <Text style={styles.username}>{name}</Text>
                        <Text style={styles.userstatus}>{status}</Text>
                    </View>
                   
                </View>
                
            ))
        }
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext:{
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:10,
       
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4

    },
    usercard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:4,
        backgroundColor:"#9ee663",
        padding:8,
        borderRadius:10,

    },
    userimg:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:15
    },
    lines:{},
    username:{
        color:'black',
        fontSize:15,
        fontWeight:'600',
    },
    userstatus:{
        color:'black',
        fontSize:12,

    },

})