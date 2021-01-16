import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {push} from 'src/lib/NavigationService';
import LinearGradient from 'react-native-linear-gradient';

function Home() {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View
            style={{
              width: '100%',
              height: 150,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 24,
            }}>
            <Image
              style={{
                width: '40%',
                resizeMode: 'contain',
              }}
              source={require('../../assets/logo.png')}
            />
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#ec4427', '#f37e33']}
            style={styles.linearGradient}>
            <TouchableOpacity style={styles.button} onPress={() => push('Inevitable', {})}>
              <Text style={styles.buttonText}>{t('inevitable')}</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#ec4427', '#f37e33']}
            style={styles.linearGradient}>
            <TouchableOpacity style={styles.button} onPress={() => push('IntroACT', {})}>
              <Text style={styles.buttonText}>{t('mayBe')}</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#ec4427', '#f37e33']}
            style={styles.linearGradient}>
            <TouchableOpacity style={styles.button} onPress={() => push('Thanks2', {})}>
              <Text style={styles.buttonText}>{t('noChoose')}</Text>
            </TouchableOpacity>
          </LinearGradient>
          <View
            style={{
              width: '100%',
              height: 200,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    width: '100%',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 10,
    borderRadius: 24,
    lineHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    borderRadius: 100,
    width: '70%',
    marginTop: 32,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
