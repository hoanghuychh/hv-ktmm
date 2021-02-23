import React, {memo} from 'react';
// import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import {push} from 'src/lib/NavigationService';
import stylesSheet from './styles';

function Inevitable() {
  // const {t} = useTranslation();
  return (
    <SafeAreaView style={stylesSheet.safeArea}>
      <ScrollView style={stylesSheet.scrollView}>
        <View style={stylesSheet.container}>
          <View style={stylesSheet.logo}>
            <Image style={stylesSheet.imageLogo} source={require('../../assets/logo.png')} />
          </View>
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

export default memo(Inevitable);

const styles = StyleSheet.create({
  tinyLogo: {
    width: 88,
    height: 88,
    margin: 10,
  },
  wrapGift: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 150,
    marginBottom: 50,
  },
});
