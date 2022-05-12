import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Button from './Button';

const Home = () => {
    useEffect(() => {
        console.log('useEffect Home');
    })
    console.log('return Home');
    return (
        <View>
            <Button />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})