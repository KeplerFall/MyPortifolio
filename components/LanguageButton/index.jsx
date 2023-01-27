import { useEffect, useContext, useState, useRef } from "react"
import {LanguageContext} from "../../context/LanguageContext"


const LanguageButton = ()=>{
    const {language, setLanguage, t} = useContext(LanguageContext)
    const selector = useRef(null)
    const changeLanguage=(arg)=>{
        setLanguage(arg)
    }

    useEffect(()=>{
    }, [language])


    return( 
        <div className="absolute top-0 right-0">
            <select className="px-4 py-2 rounded-lg focus:border-none mx-2 focus:ring-blue-500" ref={selector} name="" id="" onChange={()=>{changeLanguage(selector.current.value)}}>
                <option className=" hover:bg-[#2bcdee]" value="pt"> Pt-BR </option>
                <option className=" hover:bg-[#2bcdee]" value="en"> En-US </option>
            </select>
        </div>

    )
}

export default LanguageButton