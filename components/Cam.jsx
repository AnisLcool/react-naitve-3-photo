import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect , useState, useRef} from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
const Cam = ({addImageHandler}) => {

    const cameraRef = useRef();
    console.log('Camera Ref : ', cameraRef);
    const [permissionCamera, setPermissionCamera] = useState(null);
    const [typeCamera, setTypeCamera] = useState(Camera.Constants.Type.front);

    const toggleCamera = () => {
        if(typeCamera === Camera.Constants.Type.front){
            setTypeCamera(Camera.Constants.Type.back)
        }else{
            setTypeCamera(Camera.Constants.Type.front)

        }
    }

    const takePicture = async () => {
       const response = await cameraRef.current.takePictureAsync();
       console.log('Resopnse take picture : ', response);
       addImageHandler(response.uri)
    }
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
    }, []);
    
    if(permissionCamera === 'denied'){
        return <View><Text>Permission was not granted!</Text></View>
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={typeCamera} ref={cameraRef}>
                <TouchableOpacity onPress={toggleCamera}>
                    <Ionicons name='camera-reverse-sharp' size={64} color='green' />
                </TouchableOpacity>

                <TouchableOpacity onPress={takePicture}>
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