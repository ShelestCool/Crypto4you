import axios from 'axios';

const translateText = async (text, targetLanguage = 'ru') => {
  const apiKey = 'AIzaSyC8io54hnf5Htn_NsKYVWP_Yp3EG_GHh1A'; // Замените на ваш API ключ
  const url = `https://translation.googleapis.com/language/translate/v2`;

  try {
    const response = await axios.post(url, null, {
      params: {
        q: text,
        target: targetLanguage,
        key: apiKey,
      },
    });

    const translatedText = response.data.data.translations[0].translatedText;
    return translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return null;
  }
};

export default translateText;
