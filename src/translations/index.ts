import config from '../utils/config';
import en from './en.json';
import it from './it.json';

export const t = (path: string): string => {
  const file = config.lang === 'en' ? en : it;

  // @ts-ignore
  return path?.split('.').reduce((p, c) => {
    // @ts-ignore
    return p && p[c];
  }, file);
};
