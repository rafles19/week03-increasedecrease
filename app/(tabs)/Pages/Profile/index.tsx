import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler'


interface ProfileProps {
    name: string;
}

const profile = (props: ProfileProps) => {
    return (
        <View>
            <Text>{props.name}</Text>
        </View>
    )
}

export default profile;


const styles = StyleSheet.create({
    
})