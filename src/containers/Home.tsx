import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {push} from 'src/lib/NavigationService';
import LinearGradient from 'react-native-linear-gradient';
import stylesSheet from './styles';

function Home() {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={stylesSheet.safeArea}>
      <ScrollView style={stylesSheet.scrollView}>
        <View style={stylesSheet.container}>
          <View style={stylesSheet.logo}>
            <Image style={stylesSheet.imageLogo} source={require('../../assets/logo.png')} />
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#ec4427', '#f37e33']}
            style={stylesSheet.linearGradient}>
            <TouchableOpacity style={stylesSheet.button} onPress={() => push('Inevitable', {})}>
              <Text style={stylesSheet.buttonText}>{t('inevitable')}</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#ec4427', '#f37e33']}
            style={stylesSheet.linearGradient}>
            <TouchableOpacity style={stylesSheet.button} onPress={() => push('IntroACT', {})}>
              <Text style={stylesSheet.buttonText}>{t('mayBe')}</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#ec4427', '#f37e33']}
            style={stylesSheet.linearGradient}>
            <TouchableOpacity style={stylesSheet.button} onPress={() => push('HavePlan', {})}>
              <Text style={stylesSheet.buttonText}>{t('noChoose')}</Text>
            </TouchableOpacity>
          </LinearGradient>
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

export default memo(Home);
