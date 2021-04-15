import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import moment from 'moment'
import CountDown from 'react-native-countdown-component';
import { Icon } from 'react-native-elements'

const qrKodUret = (komut, gecerlilik, id, hescode) => {
    var onay = 'Z';
    var date = moment().add({minutes:5,seconds:30}).format('DDMMYYYYHHmmss');
    const hes = `${komut}${onay}${date}${id}${hescode};`;
    return hes;
}

function refreshPage() {
  window.location.reload(false);
}

const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>etrCode</Text>
        <Separator></Separator>
        <CountDown
            until={5 * 60}
            onFinish={refreshPage}
            size={30}
            digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#517fa4'}}
            digitTxtStyle={{color: '#517fa4'}}
            timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
            separatorStyle={{color: '#517fa4'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
        />
        <Separator></Separator>
        <QRCode 
            style={styles.qr}
            size={250} 
            value={"1234"}
            />
        <Separator/>
          <Icon
            name='refresh'
            type='evilicon'
            color='#517fa4'
            reverse
            onPress={refreshPage}
            size={24}
          />
      </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  qr:{
    backgroundColor: '#FFF',
    borderWidth: 2, 
    borderColor: '#1CC625'}
});
