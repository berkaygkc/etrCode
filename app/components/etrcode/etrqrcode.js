import React from 'react';
import {StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import moment from 'moment';

export default function EtrQRCode() {
    return (
        <QRCode 
            style={styles.qr}
            size={200} 
            value={"1234"}
        />
    )
}

const styles = StyleSheet.create({
    qr:{
        backgroundColor: '#FFF',
    }
})

