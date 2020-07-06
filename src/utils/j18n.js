import i18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

import en from "../locales/en";
import uk from "../locales/uk";

export let language = 'en';

export const setLanguage = (newLang) => {
  language = newLang
  i18n.locale = language;
  console.log("===------->", language)
};

i18n.defaultLocale = "en";
i18n.fallbacks = true;
i18n.translations = {
  en,
  uk
};
i18n.locale = RNLocalize.locale;

export default i18n;