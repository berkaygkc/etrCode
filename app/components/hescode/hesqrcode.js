import React from 'react';
import {StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import moment from 'moment';

export default function HesQRCode() {
    return (
        <QRCode 
            style={styles.qr}
            size={200} 
            value={"HEsKodunuz"}
        />
    )
}

const styles = StyleSheet.create({
    qr:{
        backgroundColor: '#FFF',
    }
})

