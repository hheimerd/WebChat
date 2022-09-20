import {useTranslation} from 'react-i18next';
import type keys from '../translation/en.json'
type keysT = keyof typeof keys.translation;

export const useAppTranslation: () => { t: (key: keysT) => string } = useTranslation;
