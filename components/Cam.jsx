import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Cam = () => {
    return (
        <View style={styles.container}>
            <View>

                <TouchableOpacity>
                    <Ionicons name='camera-reverse-sharp' size={64} color='green' />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialIcons name='camera' size={64} color='red' />
                </TouchableOpacity>
            </View>
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
})