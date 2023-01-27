import html5 from '../../src/imgs/html5.svg'
import { useContext, useState } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const MySkills = () =>{
    const {language, t} = useContext(LanguageContext)

    useState(()=>{},[language])



    return(
        <div>   
            <div className="w-[100%] h-[100vh] bg-[#2c2c2c] flex flex-col items-center rounded-t-[7px] mt-[-10px] text-white">
                <span className='mt-10 w-[80%] font-bold text-[22px]'>Hard Skills</span>
                <div className="w-[80%] pt-4 flex grid grid-rows-2 grid-flow-row ">
                    <span>HTML</span> <div className='w-[100%] bg-[#c2c2c2] h-[24px] rounded-lg'><div className='w-[100%] h-[100%] rounded-lg bg-white'></div></div>
                    <span>CSS</span> <div className='w-[100%] bg-[#c2c2c2] h-[24px] rounded-lg'><div className='w-[100%] h-[100%] rounded-lg bg-white'></div></div>
                    <span>Sass</span> <div className='w-[100%] bg-[#c2c2c2] h-[24px] rounded-lg'><div className='w-[90%] h-[100%] rounded-lg bg-white'></div></div>
                    <span>Tailwind</span> <div className='w-[100%] bg-[#c2c2c2] h-[24px] rounded-lg'><div className='w-[80%] h-[100%] rounded-lg bg-white'></div></div>
                    <span>JavaScript</span> <div className='w-[100%] bg-[#c2c2c2] h-[24px] rounded-lg'><div className='w-[90%] h-[100%] rounded-lg bg-white'></div></div>
                    <span>React</span> <div className='w-[100%] bg-[#c2c2c2] h-[24px] rounded-lg'><div className='w-[70%] h-[100%] rounded-lg bg-white'></div></div>
                    <span>NextJs</span> <div className='w-[100%] bg-[#c2c2c2] h-[24px] rounded-lg'><div className='w-[70%] h-[100%] rounded-lg bg-white'></div></div>
                    <span>MongoDb</span> <div className='w-[100%] bg-[#c2c2c2] h-[24px] rounded-lg'><div className='w-[90%] h-[100%] rounded-lg bg-white'></div></div>
                    <span>Java</span> <div className='w-[100%] bg-[#c2c2c2] h-[24px] rounded-lg'><div className='w-[80%] h-[100%] rounded-lg bg-white'></div></div>
                    <span>Python</span> <div className='w-[100%] bg-[#c2c2c2] h-[24px] rounded-lg'><div className='w-[50%] h-[100%] rounded-lg bg-white'></div></div>
                    <span>Docker</span> <div className='w-[100%] bg-[#c2c2c2] h-[24px] rounded-lg'><div className='w-[50%] h-[100%] rounded-lg bg-white'></div></div>
                    <span>Linux</span> <div className='w-[100%] bg-[#c2c2c2] h-[24px] rounded-lg'><div className='w-[60%] h-[100%] rounded-lg bg-white'></div></div>
                </div>
            </div>
        </div>
    )
}

export default MySkills