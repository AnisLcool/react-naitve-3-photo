import { StyleSheet, Text, View, Modal ,TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import Cam from './Cam';

const Home = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <Modal visible={visible} animationType='slide'>
                <View style={styles.modal}>
                    <Entypo name='cross' size={45} color='red' onPress={() => setVisible(false)}/>
                </View>
                {/* Cam */}
                <Cam />
            </Modal>
            <TouchableOpacity onPress={() => setVisible(true)}>
                <Entypo name='camera' size={64} color='black' />
            </TouchableOpacity>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})