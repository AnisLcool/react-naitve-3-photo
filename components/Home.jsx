import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import Cam from './Cam';

const Home = () => {
    const [visible, setVisible] = useState(false);
    const [uriImage, setUriImage] = useState(null);

    const addImageHandler = (imgUri) => {
        setUriImage(imgUri);
        setVisible(false);
    }
    return (
        <>
            <Modal visible={visible} animationType='slide'>
                <View style={styles.modal}>
                    <Entypo name='cross' size={45} color='red' onPress={() => setVisible(false)} />
                </View>

                <Cam addImageHandler={addImageHandler} />
            </Modal>
            <TouchableOpacity onPress={() => setVisible(true)}>
                <Entypo name='camera' size={64} color='black' />
            </TouchableOpacity>

            {uriImage && <Image style={styles.imageContainer} source={{ uri: uriImage }} /> }
            
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 300,
        borderColor: 'darkblue',
        borderWidth : 3
    },
})