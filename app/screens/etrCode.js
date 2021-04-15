import React , {useState, useEffect, Component} from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import EtrQRCode from '../components/etrcode/etrqrcode';
import Button from '../components/activate/Button';
import CountDown from 'react-native-countdown-component';


function refreshPage(){
    console.log("test")
    return
}

function etrCode(props) {    
    return (
        <View style={styles.container}>
            <View style={styles.qrBackground}>
                <Text style={styles.headerText}>etrCode</Text>
                <View style={styles.qrBorder}>
                    <EtrQRCode/>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom:15}}>etrKodunuzu okutunuz.</Text>
                <Text style={{fontSize: 18, marginBottom:10, color: '#fbc9ca'}}>Geçerlilik Süresi</Text>
                <CountDown
                until={5 * 60}
                size={30}
                digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#fbc9ca'}}
                digitTxtStyle={{color: '#fbc9ca'}}
                timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                separatorStyle={{color: '#fbc9ca'}}
                timeToShow={['M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
                />
                <Button
                mode="contained"
                onPress={refreshPage()}
                style={styles.button}
                >
                    Yenile
                </Button>
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
        height:"60%",
        backgroundColor:"#fbc9ca",
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
    button:{
        width: '80%',
        marginTop: 24,
        backgroundColor: '#fbc9ca',
    }
  });

export default etrCode;