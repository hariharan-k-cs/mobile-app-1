import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Flatecart() {
  return (
    <View>
      <Text style={styles.headingtext}>Flate cart</Text>
        <View style={styles.container}>
            <View style={[styles.card,styles.card1]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.card,styles.card2]}>
                <Text>green</Text>
            </View>
            <View style={[styles.card,styles.card3]}>
                <Text>blue</Text>
            </View>
            <View style={[styles.card,styles.card4]}>
                <Text>blue</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext:{
        backgroundColor:"green",
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:10,
        color:'white'
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        
      

    },
    card1:{
        backgroundColor:'#5274ab',
    },
    card2:{
        backgroundColor:'#328c35'
    },
    card3:{
        backgroundColor:'#0d8c8a'
    },
    card4:{
        backgroundColor:'#c20852'
    }
})