import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { translations, type Lang } from './translations';

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'portfolio-lang';

function getByPath(obj: Record<string, unknown>, path: string): string | undefined {
  const parts = path.split('.');
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur === null || typeof cur !== 'object' || !(p in (cur as object))) return undefined;
    cur = (cur as Record<string, unknown>)[p];
  }
  return typeof cur === 'string' ? cur : undefined;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === 'de' || saved === 'en') return saved;
    const nav = window.navigator.language?.toLowerCase() ?? '';
    return nav.startsWith('de') ? 'de' : 'en';
  });

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === 'de' ? 'de' : 'en';
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'de' ? 'de' : 'en';
  }, [lang]);

  const t = useCallback(
    (key: string) => {
      const de = getByPath(translations.de as unknown as Record<string, unknown>, key);
      const en = getByPath(translations.en as unknown as Record<string, unknown>, key);
      if (lang === 'de') return de ?? en ?? key;
      return en ?? de ?? key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider');
  return ctx;
}
