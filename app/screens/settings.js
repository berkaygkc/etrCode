import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState} from 'react';
import {SafeAreaView,View,Text,StyleSheet, Alert} from 'react-native';
import Button from '../components/activate/Button';
import TextInput from '../components/activate/TextInput'

function settings(props) {
    const [hes, setHes] = useState(null)
    const [tempHes, setTempHes] = useState(null)

    useEffect(() => {
        readData()
      }) 

    const readData = async() => {
        try {
          const value = await AsyncStorage.getItem('hes');
          setHes(value);
        } catch (e) {
            console.log(e);
        }
      }
    const logOut = async() => {
        await AsyncStorage.removeItem('company');
        await AsyncStorage.removeItem('activate');
        await AsyncStorage.removeItem('hes');
        await AsyncStorage.removeItem('active');
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
            <Text>HES KODUNUZ</Text>
            <TextInput
                label="HES"
                returnKeyType="done"
                value={hes}
                style={styles.text}
                onChangeText={(text) => setTempHes(text)}
            />
            <Button
                mode="contained"
                style={styles.buttonConf}
                >
                    Güncelle
            </Button>
            <Button
                mode="contained"
                onPress={areUSure}
                style={styles.buttonRed}
                >
                    Hesaptan Çık
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
    text:{
        width: '80%',
    },
    buttonConf:{
        width: '80%',
        marginTop: 24,
        backgroundColor: 'green',
    },
    buttonRed:{
        width: '80%',
        marginTop: 24,
        backgroundColor: 'red',
    }
})

export default settings;