import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, Text, View} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import Colors from 'src/constants/colors';

function Thanks() {
  const {t} = useTranslation();
  const random = Math.floor(Math.random() * 3) + 1;
  return (
    <View style={styles.container}>
      <ConfettiCannon count={200} origin={{x: 0, y: -10}} />
      <Text style={styles.welcome}>{t('congratulation')}</Text>
      <Text style={styles.welcome}>{t('takeGift')}</Text>
      {random === 1 && <Image style={styles.gift2} source={require('../../assets/but.png')} />}
      {random === 2 && <Image style={styles.gift} source={require('../../assets/pocket.png')} />}
      {random === 3 && <Image style={styles.gift} source={require('../../assets/tui.png')} />}
    </View>
  );
}

export default memo(Thanks);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.aliceBlue,
  },
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