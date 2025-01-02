import { useTypedSelector } from '@/hooks/useTypedSelector';
import { IntlProvider } from 'react-intl';
import enUS from './resources/en-US.json';
import frFR from './resources/fr-FR.json';

const messages = {
  en: enUS,
  fr: frFR,
};

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useTypedSelector((state) => state.appSettings);

  return (
    <IntlProvider messages={messages[lang]} locale={lang}>
      {children}
    </IntlProvider>
  );
};
