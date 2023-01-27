import { createContext, useState } from "react";
import pt from "../../utils/pt.json"
import en from "../../utils/en.json"

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
        }

        return(file[arg])
    }

    return(
        <LanguageContext.Provider value={{language, setLanguage, t}}>{children}</LanguageContext.Provider>
    )
}

