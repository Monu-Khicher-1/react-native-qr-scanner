import { Image, Pressable,Text,View, Button, StyleSheet, Alert } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

   

    return (
        <View style={styles.container}>
            <Image style={styles.image} source= {require( "../assets/qr_icon.png")} />
            <Text style={styles.text}>Scan Your QR Code</Text>
            <Button style={styles.button} title='Scan' onPress={()=>navigation.navigate('Scanner')}/>  
        </View>
    );
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginHorizontal:32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: "#000",
        padding:20,
        paddingHorizontal: 120,
      },
      image:{
        width:150,
        height: 150
      },
      button2:{
        padding: 70,
      }
})