import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export const Item = ({imagem, titulo}) => {
    console.log("Olha o item: ", titulo);
    return(
        <View style={styles.container}>
            <Image source={imagem} style={styles.image} resizeMode="contain"/>
            <Text style={styles.title}>{titulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        height: 168,
        backgroundColor: "white",
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    image:{
        height:84
    },
    title: {
        marginTop: 8,
        fontWeight: '500',
        fontSize: 14,
        color: "#848486"
    }

});