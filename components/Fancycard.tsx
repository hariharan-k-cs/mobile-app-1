import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fancycard() {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Places</Text>
    <View style={[styles.card,styles.cardElevated]}>
       <Image
       source={{
        uri:'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ-2kU5V7pQtbUzZRjQQ2nFXWSN7Cr-3IDBMXEgOXE3BP05Cl5DfhYmAhGCWGFmh9Ri'
       }}
       style={styles.cardimage}
       />
       <View style={styles.cardbody}>
        <Text style={styles.cardtitle}>London bridge</Text>
        <Text style={styles.cardlable}>London,England</Text>
        <Text style={styles.carddescription}>Lorem ipsum dolor 
        sit amet consectetur, adipisicing elit. Nostrum, magni
         beatae mollitia nemo necessitatibus fuga fugiat nam 
         odit laudantium eius reprehenderit, et tempora, est 
         aliquid maxime!</Text>
       </View>
       <Text style={styles.cardfooter}>10 min ago</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontWeight:'bold',
        fontSize:24,
        paddingHorizontal:8,


    },
    card:{
        width:300,
        height:340,
        borderRadius:6,
        marginVertical:10,
        marginHorizontal:16,
        
    },
    cardElevated:{
        backgroundColor:'#e6cac8',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardimage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,

    },
    cardbody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardtitle:{
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        marginBottom:6
    },
    cardlable:{
        color:'black',
        fontSize:14,
        marginBottom:4
    },
    carddescription:{
        color:'black',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1
    },
    cardfooter:{
        color:'black'
    }
})