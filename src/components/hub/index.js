import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Image, Text } from 'native-base';

export default function Hub(props){

    return (
        <View style={styles.container}>
           <View style={styles.card}>
               <Image source={require('../../assets/images/vods.png')} resizeMode="contain" />
            </View> 
            <View style={styles.card}>
               <Text>Olá</Text>
            </View> 
            <View style={styles.card}>
               <Text>Olá</Text>
            </View> 
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#333',
        padding: 30 
    },
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        width: '25%',
        height: '70%',
        backgroundColor: '#FFF',
        borderRadius: 10,
    }
});