import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import moment from 'moment';
import * as Network from 'expo-network';


export default function EtrQRCode() {
    return (
        <View>
            <QRCode
                style={styles.qr}
                size={200} 
                value={"qrValue"}
            />
            <Text>{}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    qr:{
        backgroundColor: '#FFF',
    }
})

