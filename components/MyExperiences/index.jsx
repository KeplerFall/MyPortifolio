import html5 from '../../src/imgs/html5.svg'
import { useContext, useState } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const MySkills = () =>{
    const {language, t} = useContext(LanguageContext)

    useState(()=>{},[language])



    return(
        <div>   
            <div className="w-[100%] h-[100vh] bg-[#2c2c2c] flex flex-col items-center rounded-t-[7px] mt-[-10px] text-white">
                
            </div>
        </div>
    )
}

export default MySkills