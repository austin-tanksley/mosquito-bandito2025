import { useRef } from 'react'
import { FaPhone } from "react-icons/fa6";
import LOGO from '/mosquito-bandito-logo.svg'
import PHONE_ICON from '/phone.svg'

const navBarStyle = 'hover:font-semibold cursor-pointer duration-500'

function Header({processRef, requestQuoteRef}) {

  const scrollProcess = () => {
    processRef.current?.scrollIntoView({behavior: "smooth"});
  }
  const scrollToRequestQuote = () => {
    requestQuoteRef.current?.scrollIntoView({behavior:"smooth"});
  }

    return (
        <div
        className='container mx-auto bg-tundra flex justify-between items-center py-4 px-2' 
        >
            <img src={LOGO} alt="" 
            className='h-[72px]'/>
            <nav>
                <ul className='hidden md:flex gap-4'>
                    <button 
                      className={navBarStyle}
                      onClick={()=>scrollProcess()}
                    >
                      Our 3-Step Process
                    </button >
                    <button 
                      className={navBarStyle}
                      onClick={() => scrollToRequestQuote()}
                    >
                      Request Quote
                    </button>
                </ul>
            </nav>
            <div className='flex items-center gap-2'>
                <FaPhone className='text-bandito-grey-400 size-5' />
                <a href="tel:+19186880232" className="text-bandito-grey-400 font-body">918-688-0232</a>
            </div>
        </div>
    )
}

export default Header
