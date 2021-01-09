import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// tips: export each translation to a seperate file
const resources = {
  en: {
    translation: {
      english: 'English',
      welcome: 'Will you enroll Academy Of Cryptography Techniques!',
      inevitable: 'Of course !',
      mayBe: 'May Be',
      noChoose: 'No, I have a plan',
      settings: 'Settings',
      home: 'Home',
      language: 'Language',
      cntt: 'Information technology',
      attt: 'Information security',
      dtvt: 'Electronics and telecommunications engineering',
      industry: 'The industry you are interested in ?',
      continue: 'Continue',
      thanks: 'Thank you',
      takeGift: 'The Academy gives you a souvenir',
    },
  },
  vn: {
    translation: {
      welcome: 'Bạn sẽ đăng ký học tại Học viện Kỹ Thuật Mật Mã ?',
      inevitable: 'Tất nhiên !',
      mayBe: 'Đang phân vân',
      noChoose: 'Không, tôi đã có kế hoạch',
      settings: 'Cài đặt',
      home: 'Trang chủ',
      language: 'Ngôn ngữ',
      cntt: 'Công nghệ thông tin',
      attt: 'An toàn thông tin',
      dtvt: 'Kĩ thuật điện tử viễn thông',
      industry: 'Ngành bạn quan tâm ?',
      continue: 'Tiếp tục',
      thanks: 'Cảm ơn bạn',
      takeGift: 'Học viện tặng bạn món quà kỉ niệm',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vn',
    fallbackLng: 'vn',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
