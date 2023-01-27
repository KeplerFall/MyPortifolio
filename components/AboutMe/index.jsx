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
        <div className="color-[#222222] h-[100vh] w-[100%] bg-gradient-to-br from-[#2bcdee] to-[#005c6f] mt-[-10px] rounded-t-[7px] flex justify-center">
            <div className="w-[80%] h-[100%] flex py-10 flex-col">
                <span className={defaultStyle.titulo}>{t("Sobre mim.")}</span>
                <span className={defaultStyle.titulot1}>{t("Um entusiasta da Tecnologia")}</span>
                <span className={defaultStyle.paragrafo}>{t("Desde que me entendo por gente, sempre amei todo o tipo de tecnologia, sempre buscando novidades no mercado, tentando ter uma visão geral sobre tudo.")}</span>
                <span className={defaultStyle.paragrafo}>{t("Comecei meu trajeto nesse meio em 2013, quando ingressei na escola de ensino Etec José Martimiano da Silva, onde fiz o curso de Técnico em Informática, englobando tanto front, quando back end.")}</span>
                
                <div className={defaultStyle.divisoria}></div>

                <span className={defaultStyle.titulot1}>{t("Minhas experiências")}</span>
                <span className={defaultStyle.subtitulo}>SODIMAC Homecenter</span>
                <span className={defaultStyle.subtitulo}>{t("Jun 2017 - Set 2020 ")}</span>
                <span>{t("Promotor de crédito")}</span>
                <span>{t("Minha principal função era abordar clientes e converte-los a usuários do cartão da loja, realizando todo o processo de cadastramente e emissão.")}</span>
                
                <div className={defaultStyle.halfDivisoria}></div>

                <span className={defaultStyle.subtitulo}>FUNDACE</span>
                <span className={defaultStyle.subtitulo}>Nov 2020 - Nov 2021 </span>
                <span>{t("Assistente de TI")}</span>

                <div className={defaultStyle.halfDivisoria}></div>

                <span className={defaultStyle.subtitulo}>Complette Web</span>
                <span className={defaultStyle.subtitulo}>Nov 2021 - Jan 2023</span>
                <span>{t("Desenvolvedor Front End - 3 Meses")}</span>
                <span>{t("Gerente de Projetos - 1 Ano e 2 Meses")}</span>
            </div>
        </div>
    )
}

export default AboutMe