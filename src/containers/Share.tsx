import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, Linking, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {push} from 'src/lib/NavigationService';
import stylesSheet from './styles';

function Inevitable() {
  const {t} = useTranslation();
  const postOnFacebook = () => {
    const facebookParameters = [];
    const facebookShareURL = 'http://tuyensinh.actvn.edu.vn/';
    const postContent = t('postContent');
    if (facebookShareURL) facebookParameters.push('u=' + encodeURI(facebookShareURL));
    if (postContent) facebookParameters.push('quote=' + encodeURI(postContent));
    const urlWeb = 'https://www.facebook.com/sharer/sharer.php?' + facebookParameters.join('&');
    // const urlApp = 'fb://sharer/sharer.php?' + facebookParameters.join('&');
    // Linking.canOpenURL(urlApp)
    //   .then((supported: any) => {
    //     if (supported) {
    //       return Linking.openURL(urlApp);
    //     } else {
    //       return Linking.openURL(urlWeb);
    //     }
    //   })
    //   .then(() => {
    //     push('ChooseGift', {});
    //   })
    //   .catch(() => {
    //     return false;
    //   });

    Linking.openURL(urlWeb)
      .then(() => {
        push('ChooseGift', {});
      })
      .catch(() => {
        return false;
      });
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
            style={[stylesSheet.linearGradient, {marginVertical: 100}]}>
            <TouchableOpacity style={stylesSheet.button} onPress={postOnFacebook}>
              <Text style={stylesSheet.buttonText}>{t('share')}</Text>
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

export default memo(Inevitable);
