import React from 'react';
import { View , Text, StyleSheet} from 'react-native';
import HesQRCode from '../components/hescode/hesqrcode'

function HESCode(props) {
    return (
        <View style={styles.container}>
            <View style={styles.qrBackground}>
                <Text style={styles.headerText}>HES Kodu</Text>
                <View style={styles.qrBorder}>
                    <HesQRCode/>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom:15}}>HES Kodunuzu okutunuz.</Text>
            </View>
        </View>
    );
    
}

var styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
    },
    qrBackground:{
        width:"100%",
        height:"90%",
        backgroundColor:"#bfedc7",
        alignItems: "center",
        justifyContent: "center",
    },
    qrBorder: {
        width: 250,
        height: 250,
        borderRadius: 25,
        borderColor: "#fff",
        borderWidth: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 25
    },
    body:{
        alignItems: "center",
        justifyContent: "center",
        top: 25,
    },
  });

export default HESCode;