import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import {checkConnected} from './checkConnection'





export default function EtrQRCode() {
    const [actCode, setActCode] = useState(null)
    const [hes, setHes] = useState(null)
    const [connectStatus,setConnectStatus] = useState("0")

    checkConnected().then(res=>{
        res ? setConnectStatus("1") : setConnectStatus("0") ; //Şuanda ters şekilde yazıldı. HES sorgulaması yapılınca düzeltilecek.
    })

    useEffect(() => {
        readData()
      }) 

    const readData = async() => {
        try {
            const hesValue = await AsyncStorage.getItem('hes');
            const actValue = await AsyncStorage.getItem('activate');
            setHes(hesValue)
            setActCode(actValue)
        } catch (e) {
            console.log(e);
        }
    }
    const qrKodUret = (komut, id, hescode) => {
        if (komut == 1) {
            var onay = 'Z';
        }
        else {
            var onay = '1'
        }
        
        var date = moment().add({minutes:5,seconds:30}).format('DDMMYYYYHHmmss');
        const hes = `${komut}${onay}${date}${id}${hescode};`;
        return hes;
    }
    return (
        <View>
            <QRCode 
                style={styles.qr}
                size={200} 
                value={qrKodUret(connectStatus, actCode, hes)}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    qr:{
        backgroundColor: '#FFF',
    }
})

