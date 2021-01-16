import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '@ui-kitten/components';
import Colors from 'src/constants/colors';
import {push} from 'src/lib/NavigationService';

function Inevitable() {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{t('descriptionACT')}</Text>
      <Button style={styles.button} status="primary" onPress={() => push('Inevitable', {})}>
        {t('continue')}
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