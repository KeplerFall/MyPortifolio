import { useContext, useEffect } from "react"
import {LanguageContext} from "../../context/LanguageContext"
import myProjectsjson from "../../utils/myProjects.json"

const MyProjects = ()=>{
    const {language, t} = useContext(LanguageContext)

    useEffect(()=>{},[language])

    return(
        <div className="color-[#222222] h-[100vh] w-[100%] bg-gradient-to-br from-[#2bcdee] to-[#005c6f] mt-[-10px] rounded-t-[7px] flex justify-center">
            <span>{t("Meus projetos")}</span>
        </div>

        
    )
}

export default MyProjects