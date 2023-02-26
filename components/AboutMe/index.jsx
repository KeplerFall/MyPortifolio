import { LanguageContext } from "@/context/LanguageContext"
import { useContext, useEffect } from "react"

const AboutMe = () =>{

    const defaultStyle = {
        divisoria: `h-[0px] border-b-[1px] border-[#222222] w-[100%] mt-4`,
        halfDivisoria: `h-[0px] border-b-[1px] border-[#222222] w-[50%] mt-4`,
        paragrafo: `my-1 text-[16px]`,
        titulo: `text-[21px] font-medium`,
        titulot1: `text-[22px] font-semibold mb-2`,
        subtitulo: `text-[18px] font-semibold`
    }

    const {language, t} = useContext(LanguageContext)

    useEffect(()=>{

    },[language])

    return(
        <div className="color-[#222222] min-h-[100vh] w-[100%] bg-gradient-to-br from-[#2bcdee] to-[#005c6f] mt-[-10px] rounded-t-[7px] flex justify-center">
            <div className="w-[80%] h-[100%] flex py-10 flex-col">
                <span className={defaultStyle.titulo}>{t("Sobre mim.")}</span>
                <span className={defaultStyle.titulot1}>{t("Um entusiasta da Tecnologia")}</span>
                <span className={defaultStyle.paragrafo}>{t("Desde que me entendo por gente, sempre amei todo o tipo de tecnologia, sempre buscando novidades no mercado, tentando ter uma visão geral sobre tudo.")}</span>
                <span className={defaultStyle.paragrafo}>{t("Comecei meu trajeto nesse meio em 2013, quando ingressei na escola de ensino Etec José Martimiano da Silva, onde fiz o curso de Técnico em Informática, englobando tanto front, quando back end.")}</span>
                
                <div className={defaultStyle.divisoria}></div>

                <span className={defaultStyle.paragrafo}>{t("motivationPhrase")}</span>
            </div>
        </div>
    )
}

export default AboutMe