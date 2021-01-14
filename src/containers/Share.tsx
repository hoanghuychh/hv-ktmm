import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Linking, StyleSheet, Text, View} from 'react-native';
import {Button} from '@ui-kitten/components';
import Colors from 'src/constants/colors';
import {push} from 'src/lib/NavigationService';

function Inevitable() {
  const {t} = useTranslation();
  const postOnFacebook = () => {
    const facebookParameters = [];
    const facebookShareURL = 'http://actvn.edu.vn/';
    const postContent = t('postContent');
    if (facebookShareURL) facebookParameters.push('u=' + encodeURI(facebookShareURL));
    if (postContent) facebookParameters.push('quote=' + encodeURI(postContent));
    const url = 'https://www.facebook.com/sharer/sharer.php?' + facebookParameters.join('&');

    Linking.openURL(url)
      .then(() => {
        push('ChooseGift', {});
      })
      .catch(() => {
        return false;
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{t('share')}</Text>
      <Button style={styles.button} status="primary" onPress={postOnFacebook}>
        {t('buttonShare')}
      </Button>
    </View>
  );
}

export default memo(Inevitable);

const styles = StyleSheet.create({
  button: {
    margin: 2,
    minWidth: 222,
    marginTop: 10,
  },
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
});
