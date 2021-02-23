import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {push} from 'src/lib/NavigationService';
import LinearGradient from 'react-native-linear-gradient';
import stylesSheet from './styles';
import {useSelector} from 'react-redux';

function Inevitable() {
  const {t} = useTranslation();
  const current = useSelector((state: any) => state?.app?.current);
  return (
    <SafeAreaView style={stylesSheet.safeArea}>
      <ScrollView style={stylesSheet.scrollView}>
        <View style={stylesSheet.container}>
          <View style={stylesSheet.wrapImage}>
            {current === 'hanoi' && (
              <Image style={stylesSheet.image} source={require('../../assets/HVMM-game.png')} />
            )}
            {current === 'hcm' && (
              <Image style={stylesSheet.image} source={require('../../assets/game-KMA-HCM.png')} />
            )}
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#ec4427', '#f37e33']}
            style={stylesSheet.linearGradientBottom}>
            <TouchableOpacity style={stylesSheet.button} onPress={() => push('Inevitable', {})}>
              <Text style={stylesSheet.buttonText}>{t('continue')}</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default memo(Inevitable);
