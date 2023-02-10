import React, {useState,useEffect} from "react";
import {View, Button, Text, Linking, StyleSheet, Alert} from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from '@react-navigation/native';

export default function Scanner(){

    const navigation = useNavigation();
    
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false); 

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        };
    
        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = async({ type, data }) => {
        setScanned(true);
        // await timeout(1000);
        const supported = await Linking.canOpenURL(data);
        if (supported){
            Alert.alert(`${data}`, 'This link will take you to a site outside this app.', [
                        {
                        text: 'Open link',
                        onPress: async() =>{
                            setScanned(false);
                            navigation.navigate('Home');
                            await Linking.openURL(data);
                           
                        },
                        style: 'cancel',
                        },
                        {text: 'Copy', onPress: async() => {
                            await Clipboard.setStringAsync(`${data}`);
                            setScanned(false);
                            navigation.navigate('Home');
                        }},
                        {text: 'Close',
                        onPress:async()=>{
                            setScanned(false);
                            navigation.navigate('Home');
                        }},
                    ]);
            //   await Linking.openURL(data);

        }
        else {
            Alert.alert(`${data}`,`Data is not any url.`,  [
                {
                text: 'Copy',
                onPress: async() =>{ 
                    await Clipboard.setStringAsync(`${data}`);
                    setScanned(false);
                    navigation.navigate('Home');
                    await timeout(2000);
                },
                style: 'cancel',
                },
                {text: 'Close',
                onPress:async()=>{
                    setScanned(false);
                    navigation.navigate('Home');
                    await timeout(2000);
                }},
            ]);
            // alert(`Data: ${data} , Type: ${type}`)
        }
        await timeout(3000);

    };

    if (hasPermission === null) {
    return (
        <View>
            <Text>R equesting for camera permission</Text>
        </View>
       );
    }

    if (hasPermission === false) {
    return(
        <View>
             <Text>No access to camera</Text>
            
        </View>
        
        );
    }

    return (
    <View style={styles.container}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        />
    </View>
    );
    
}


const styles = StyleSheet.create({ 
    container : {
        flex: 1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    }
})