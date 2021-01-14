import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button} from '@ui-kitten/components';
import Colors from 'src/constants/colors';
import {push} from 'src/lib/NavigationService';

function ATTT() {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Image style={styles.image1} source={require('../../assets/CNTTIMG.png')} />
      {/* <Text style={styles.title}>{t('attt')}</Text>
      <Text style={styles.welcome}>{t('descriptionAttt')}</Text> */}
      <Button style={styles.button} status="primary" onPress={() => push('Share', {})}>
        {t('continue')}
      </Button>
    </View>
  );
}

export default memo(ATTT);

const styles = StyleSheet.create({
  button: {
    margin: 2,
    minWidth: 222,
    marginTop: 10,
  },
  image1: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.aliceBlue,
  },
});
