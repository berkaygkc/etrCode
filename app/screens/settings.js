import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {SafeAreaView,View,Text,StyleSheet, Alert} from 'react-native';
import Button from '../components/activate/Button';
import Restart from 'fiction-expo-restart'

function settings(props) {
    const logOut = async() => {
        await AsyncStorage.removeItem('company');
        await AsyncStorage.removeItem('activate');
        await AsyncStorage.removeItem('hes');
        await AsyncStorage.removeItem('active');
        Restart();
    }

    const areUSure = () => {
        Alert.alert(
            "Emin Misiniz?",
            "Çıkış yapmak istediğinize emin misiniz? Tüm bilgileriniz sıfırlanacaktır.",
            [
                {
                text: "Hayır",
                style: "cancel" 
                },
                {
                    text:"Evet",
                    onPress: ()=>logOut()
                }
            ]
            )
    }
    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Button
                mode="contained"
                onPress={areUSure}
                style={styles.button}
                >
                    Çıkış Yap
            </Button>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        top: 25,
    },
    button:{
        width: '80%',
        marginTop: 24,
        backgroundColor: 'red',
    }
})

export default settings;