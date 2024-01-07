import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJson from './locale/en.json';
import hiJson from './locale/hi.json';

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: enJson },
		hi: { translation: hiJson },
	},
	lng: 'en',
});
