import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from 'src/constants/colors';
import {push} from 'src/lib/NavigationService';

function Inevitable() {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{t('chooseGift')}</Text>
      <View style={styles.wrapGift}>
        <TouchableOpacity onPress={() => push('Thanks', {})}>
          <Image style={styles.tinyLogo} source={require('../../assets/gift.jpeg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => push('Thanks', {})}>
          <Image style={styles.tinyLogo} source={require('../../assets/gift.jpeg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => push('Thanks', {})}>
          <Image style={styles.tinyLogo} source={require('../../assets/gift.jpeg')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default memo(Inevitable);

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
  tinyLogo: {
    width: 88,
    height: 88,
    margin: 10,
  },
  wrapGift: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
});
