import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import stylesSheet from './styles';

function Settings() {
  const {t, i18n} = useTranslation();
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const fetchUser = () => {
    const userId = '1';
    dispatch(fetchUserAsync.request(userId));
  };
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
            style={[stylesSheet.linearGradient, {marginVertical: 20}]}>
            <TouchableOpacity style={stylesSheet.button} onPress={() => i18n.changeLanguage('en')}>
              <Text style={stylesSheet.buttonText}>{t('HÀ NỘI')}</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#ec4427', '#f37e33']}
            style={[stylesSheet.linearGradient, {marginVertical: 20}]}>
            <TouchableOpacity style={stylesSheet.button} onPress={() => i18n.changeLanguage('vn')}>
              <Text style={stylesSheet.buttonText}>{t('HỒ CHÍ MINH')}</Text>
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

export default memo(Settings);
