import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '@ui-kitten/components';
import Colors from 'src/constants/colors';
import {push} from 'src/lib/NavigationService';

function Home() {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{t('welcome')}</Text>
      <Button style={styles.button} status="success" onPress={() => push('Inevitable', {})}>
        {t('inevitable')}
      </Button>
      <Button style={styles.button} status="warning" onPress={() => push('IntroACT', {})}>
        {t('mayBe')}
      </Button>
      <Button style={styles.button} status="info" onPress={() => push('Thanks2', {})}>
        {t('noChoose')}
      </Button>
    </View>
  );
}

export default memo(Home);

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
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
});
