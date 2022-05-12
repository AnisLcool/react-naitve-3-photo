import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import axios from 'axios';
const Cam = () => {

    useEffect(() => {
        axios.get().then().catch();
        Camera.requestCameraPermissionsAsync().then(response => {
            console.log('Reponse : ', response);
        }).catch(error => {

        });
    })

    return (
        <View style={styles.container}>
            <Camera style={styles.camera}>
                <TouchableOpacity>
                    <Ionicons name='camera-reverse-sharp' size={64} color='green' />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialIcons name='camera' size={64} color='red' />
                </TouchableOpacity>
            </Camera>
        </View>
    )
}

export default Cam

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    },
    camera:{
        flex: 1
    }
})