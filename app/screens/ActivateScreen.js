import React, { useState, useEffect } from 'react'
import { StyleSheet, Alert} from 'react-native'
import Background from '../components/activate/Background'
import Logo from '../components/activate/Logo'
import Header from '../components/activate/Header'
import Button from '../components/activate/Button'
import TextInput from '../components/activate/TextInput'
import { compCodeValidator } from '../helpers/compCodeValidator'
import { HESCodeValidator } from '../helpers/HESCodeValidator'
import { activateCodeValidator } from '../helpers/activateCodeValidator'
import AsyncStorage from '@react-native-community/async-storage'

export default function ActivateScreen({ navigation }) {
  const [compCode, setCompCode] = useState({ value: '', error: '' })
  const [activateCode, setActivateCode] = useState({ value: '', error: '' })
  const [HESCode, setHESCode] = useState({ value: '', error: '' })
  const [infos, setInfos] = useState({info:{companyCode:'',actCode:'',HESCodee:''}})

  useEffect(() => {
    readData()
  }) 

  const storeData = async() => {
    const company = compCode.value;
    const activate = activateCode.value;
    const hes = HESCode.value;
    try {
      await AsyncStorage.setItem('company', company);
      await AsyncStorage.setItem('activate', activate);
      await AsyncStorage.setItem('hes', hes.toUpperCase());
      await AsyncStorage.setItem('active', "1");
    } catch (e){
      console.log(e);
    }
  }

  const readData = async() => {
    try {
      const value = await AsyncStorage.getItem('active');
      console.log(value);
      if (value !== null) {
        navigation.navigate('Home')
      }
  } catch (e) {
      // error reading value
  }
  }

  const onSignUpPressed = () => {
    const compCodeError = compCodeValidator(compCode.value)
    const activateCodeError = activateCodeValidator(activateCode.value)
    const HESCodeError = HESCodeValidator(HESCode.value)
    /* if (compCodeError || activateCodeError || HESCodeError) {
      setCompCode({ ...compCode, error: compCodeError })
      setActivateCode({ ...activateCode, error: activateCodeError })
      setHESCode({ ...HESCode, error: HESCodeError })
      return
    } */
    storeData()

    Alert.alert(
      "Başarılı",
      "Aktivasyon Başarılı!",
      [
        {
          text: "Tamam"
        }
      ]
      )
    navigation.navigate('Home')
  }

  return (
    <Background>
      <Logo />
      <Header>Hesabını Aktif Et</Header>
      <TextInput
        label="Firma Kodu"
        returnKeyType="next"
        value={compCode.value}
        onChangeText={(text) => setCompCode({ value: text, error: '' })}
        error={!!compCode.error}
        errorText={compCode.error}
      />
      <TextInput
        label="Aktivasyon Kodu"
        returnKeyType="next"
        value={activateCode.value}
        onChangeText={(text) => setActivateCode({ value: text, error: '' })}
        error={!!activateCode.error}
        errorText={activateCode.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Hes Kodu"
        returnKeyType="done"
        value={HESCode.value}
        onChangeText={(text) => setHESCode({ value: text, error: '' })}
        error={!!HESCode.error}
        errorText={HESCode.error}
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24, backgroundColor: '#E94057'}}
      >
        Aktif Et
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
})
