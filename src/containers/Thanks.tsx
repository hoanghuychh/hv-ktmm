import React, {memo} from 'react';
import {BackHandler} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useRoute, useFocusEffect} from '@react-navigation/native';
// import ConfettiCannon from 'react-native-confetti-cannon';
import stylesSheet from './styles';

function Thanks() {
  const {t} = useTranslation();
  const option = ['but', 'but', 'pocket', 'but', 'but', 'pocket', 'but', 'tui', 'but', 'pocket'];
  const random = option[Math.floor(Math.random() * option.length)];
  const randomPocket = Math.floor(Math.random() * 2) + 1;
  const route = useRoute();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'Thanks' || route.name === 'Thanks2') {
          return true;
        } else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [route]),
  );
  return (
    <SafeAreaView style={stylesSheet.safeArea}>
      <ScrollView style={stylesSheet.scrollView}>
        <View style={stylesSheet.container}>
          <View style={stylesSheet.logo}>
            <Image style={stylesSheet.imageLogo} source={require('../../assets/logo.png')} />
          </View>
          <Text style={styles.welcome}>{t('congratulation')}</Text>
          {random === 'but' && (
            <Image style={styles.gift2} source={require('../../assets/pen.png')} />
          )}
          {random === 'pocket' && randomPocket === 1 && (
            <Image style={styles.gift} source={require('../../assets/pocket1.png')} />
          )}
          {random === 'pocket' && randomPocket === 2 && (
            <Image style={styles.gift} source={require('../../assets/pocket2.png')} />
          )}
          {random === 'tui' && (
            <Image style={styles.gift} source={require('../../assets/tui.png')} />
          )}
          <View style={stylesSheet.wrapKmakey}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../../assets/kmakey.png')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <ConfettiCannon count={200} origin={{x: 0, y: -10}} />
    // </View>
  );
}

export default memo(Thanks);

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  gift: {
    width: 250,
    height: 250,
    margin: 10,
    zIndex: 1,
  },
  gift2: {
    width: 300,
    height: 300,
    margin: 10,
    zIndex: 1,
  },
});
