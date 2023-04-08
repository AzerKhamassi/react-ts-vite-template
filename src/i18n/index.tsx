import { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { useAppSelector } from "../redux";
import en from "./en.json";
import fr from "./fr.json";

type Languages = {
  [key in 'fr' | 'en']: Record<keyof typeof en, string>;
};

interface CustomIntlProviderProps {
  children: ReactNode
}

const languages: Languages = { fr, en };


const CustomIntlProvider = ({ children }: CustomIntlProviderProps) => {
  const language = useAppSelector(state => state.app.language)
  return (
    <IntlProvider messages={languages[language]} locale="fr">
      {children}
    </IntlProvider>
  );
};

export default CustomIntlProvider;
