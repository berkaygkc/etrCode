import React , {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-community/async-storage';

export default function HesQRCode() {
    const [hes, setHes] = useState(null)

    useEffect(() => {
        readData()
      }) 

    const readData = async() => {
        try {
            const hesValue = await AsyncStorage.getItem('hes');
            setHes(hesValue)
        } catch (e) {
            console.log(e);
        }
    }
    const qrKodUret = (hescode) => {
        const uuids = uuid.v4();
        const qr = `${uuids}|${hescode}`;
        return qr;
    }
    return (
        <QRCode 
            style={styles.qr}
            size={200} 
            value={qrKodUret(hes)}
        />
    )
}

const styles = StyleSheet.create({
    qr:{
        backgroundColor: '#FFF',
    }
})

