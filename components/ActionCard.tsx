import { Image, Linking, StyleSheet, Systrace, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(wesiteLink:string){
        Linking.openURL(wesiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card,styles.elevatedcard]}>
        <View style={styles.headcontainer}>
            <Text style={styles.headerText}>About the computer hardware and motherboard 
            </Text>
        </View>
         <Image source={{
                uri:'https://cdn.pixabay.com/photo/2014/09/20/13/52/board-453758_1280.jpg'
            }}
            style={styles.cardimage}
            />
        <View style={styles.bodycontainer}>
            <Text numberOfLines={4}>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Architecto, dicta? Cum 
                voluptatum consequatur aperiam blanditiis 
                voluptatum consequatur aperiam blanditiis 
                voluptatum consequatur aperiam blanditiis 
            </Text>
        </View>
        <View style={styles.footercontainer}>
            <View style={styles.socialLink}>
            <TouchableOpacity
            onPress={()=>openWebsite('https://www.instagram.com/')}>
                <Text>follow me NO..</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.socialLink}>
            <TouchableOpacity
            onPress={()=>openWebsite('https://www.instagram.com/')}>
                <Text>read more</Text>
            </TouchableOpacity>
        </View>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,

    },
    card:{
        width:330,
        height:400,
        borderRadius:5,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedcard:{
        backgroundColor:'orange',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
    shadowOpacity:0.3,
    },
    headcontainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center'
    },
    headerText:{
        color:'white',
        fontSize:15,
        fontWeight:'600',

    },
    cardimage:{
        height:190,
        margin:5
    },
    bodycontainer:{
        marginBottom:9,
        padding:10,

    },
    footercontainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'

    },
    socialLink:{
        fontSize:15,
        fontWeight:'700',
        color:'black',
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:8

    },


})