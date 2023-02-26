import { createContext, useState } from "react";
import pt from "../../utils/pt.json"
import en from "../../utils/en.json"
import de from "../../utils/de.json"

export const LanguageContext = createContext({

})

export const LanguageProvider = ({ children }) =>{
    const [language, setLanguage] = useState('pt')

    const t = (arg)=>{
        let file;
        switch (language){
            case 'pt':
                file = pt
            break;
            case 'en':
                file = en
            break;
            case 'de':
                file = de
            break;
        }

        return(file[arg])
    }

    return(
        <LanguageContext.Provider value={{language, setLanguage, t}}>{children}</LanguageContext.Provider>
    )
}

