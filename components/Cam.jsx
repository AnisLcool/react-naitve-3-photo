import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect , useState} from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import axios from 'axios';
const Cam = () => {
    const [permissionCamera, setPermissionCamera] = useState(null)

    useEffect(() => {
        // axios.get().then().catch();
        Camera.requestCameraPermissionsAsync().then(response => {
            console.log('Reponse : ', response);
            // granted => oui, denied => non
            const {status} = response;
            setPermissionCamera(status);
        }).catch(error => {
            console.log('error : ', error);
        });
    }, [])
    
    if(permissionCamera === 'denied' ||!permissionCamera){
        return <View><Text>Permission was not granted!</Text></View>
    }

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