import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Elevatedcard() {
  return (
    <View>
      <Text style={styles.headingtext}>Elevated card</Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card,styles.cardElevated]}>
                <Text style={styles.texts}>Tap</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text style={styles.texts}>Tap2</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text style={styles.texts}>Tap3</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text style={styles.texts}>Tap4</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text style={styles.texts}>Tap5</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text style={styles.texts}>Tap6</Text>
            </View>
            </ScrollView>    
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext:{
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:10,
        color:'black',
        marginTop:10,
    },
    container:{
        padding:8,

    },
    texts:{
        color:'white'
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8 

    },
    cardElevated:{
        backgroundColor:"#8f7a78",
        color:'white',
        // elevation:4
        shadowOffset:{
            width:1,
            height:1
        },
      shadowColor:'#3334',
      shadowOpacity:0.4,
      shadowRadius:2
    }
})