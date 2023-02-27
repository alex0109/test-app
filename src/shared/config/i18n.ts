import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: {
            title: "Home",
          },
          profile: {
            title: "Profile",
          },
          news: {
            title: "News",
            button: "More",
          },
          auth: {
            title: "Log In",
            username: "Username",
            password: "Password",
            button: "Sign In",
            error: "Username or password was wrong",
          },
          global: {
            header: {
              title: "Test site",
              buttonLogout: "LOG OUT",
              uaButton: "Ukrainian",
              enButton: "English",
            },
            drawer: {
              home: "Home",
              news: "News",
              profile: "Profile",
              login: "Log In",
              logout: "Log Out",
            },
          },
        },
      },
      ua: {
        translation: {
          home: {
            title: "Головна",
          },
          profile: {
            title: "Профiль",
          },
          news: {
            title: "Новини",
            button: "Бiльше",
          },
          auth: {
            title: "Логiн",
            username: "Користувач",
            password: "Пароль",
            button: "Увiйти",
            error: "Ім'я користувача або пароль неправильні",
          },
          global: {
            header: {
              title: "Тестовий сайт",
              buttonLogout: "Вийти",
              uaButton: "Українська",
              enButton: "Англійська",
            },
            drawer: {
              home: "Головна",
              news: "Новини",
              profile: "Профiль",
              login: "Увiйти",
              logout: "Вийти",
            },
          },
        },
      },
    },
  });

export default i18n;
