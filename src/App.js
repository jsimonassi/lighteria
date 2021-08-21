import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>LIGHTERIA</Text>
                <View style={styles.containerImage}>
                    <Image
                        style={styles.imagem}
                        source={require('./assets/images/icone-sacola.png')} />
                </View>
            </View>
            <View style={styles.containerDescription}>
                <View style={styles.description}>
                </View>
                <View style={styles.containerTextDescription}>
                    <Text style={styles.textDescription}>Categorias</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F0F4"
    },
    containerImage: {
        backgroundColor: 'white',
        padding: 18,
        borderRadius: 30
    },
    imagem: {
        height: 30,
        width: 30
    },
    containerTitle: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 24
    },
    title: {
        // fontFamily: 'OpenSans-ExtraBold',
        fontSize: 28
    },
    containerDescription: {
        paddingHorizontal: 24,
    },
    description: {
        borderWidth: 0.5,
        borderColor: '#A1A5AA'
    },
    containerTextDescription: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -46
    },
    textDescription: {
        padding: 34,
        backgroundColor: '#F4F0F4',
        fontSize: 16,
        color: "#A1A5AA"

    }
})

export default App;