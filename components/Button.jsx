import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Button = () => {
    useEffect(() => {
        console.log('useEffect Button');
    })
    console.log('return Button');
    return (
        <View>
            <Text>Button</Text>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({})