import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
// import ConfettiCannon from 'react-native-confetti-cannon';
import stylesSheet from './styles';

function Thanks() {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={stylesSheet.safeArea}>
      <ScrollView style={stylesSheet.scrollView}>
        <View style={stylesSheet.container}>
          <View style={stylesSheet.logo}>
            <Image style={stylesSheet.imageLogo} source={require('../../assets/logo.png')} />
          </View>
          <Text style={styles.welcome}>{t('congratulation')}</Text>
          <Image style={styles.gift2} source={require('../../assets/pen.png')} />
          <View style={stylesSheet.wrapKmakey}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../../assets/kmakey.png')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default memo(Thanks);

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  gift2: {
    width: 300,
    height: 300,
    margin: 10,
    zIndex: 1,
  },
});
