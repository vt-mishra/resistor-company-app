import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById("root"));

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: require('./assets/locales/en/translation.json') },
    fr: { translation: require('./assets/locales/fr/translation.json') },
    ko: { translation: require('./assets/locales/ko/translation.json') },
    hn: { translation: require('./assets/locales/hn/translation.json') },
    mr: { translation: require('./assets/locales/mr/translation.json') }
  },
  lng: localStorage.getItem("lng") || "en", // set the initial language
  fallbackLng: 'en', // set the fallback language
  interpolation: {
    escapeValue: false // React already protects against XSS
  }
});

// set the language in local storage
// localStorage.setItem(
//   "findByResister",
//   JSON.stringify({
//     series: "",
//     type: "",
//     pdfname: "",
//     variants: "",
//     housing_types: "",
//     mounting_cfg: "",
//     power_rating: "",
//     resistance: "",
//     tolerance: "",
//     packaging: "",
//     features: "",
//   })
// );
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
