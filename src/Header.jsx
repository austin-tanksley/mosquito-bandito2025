import { useState } from 'react'
import LOGO from '/mosquito-bandito-logo.svg'
import PHONE_ICON from '/phone.svg'

const navBarStyle = 'hover:font-semibold'

function Header() {

    return (
        <div
        className='container mx-auto bg-tundra flex justify-between items-center py-4 px-2' 
        >
            <img src={LOGO} alt="" />
            <nav>
                <ul className='hidden md:flex gap-4'>
                    <li className={navBarStyle}><a href="#">Our 3-Step Process</a></li>
                    <li className={navBarStyle}><a href="#">Request Quote</a></li>
                </ul>
            </nav>
            <div className='flex items-center gap-2'>
                <img src={PHONE_ICON} alt="" />
                <p>918-902-9287</p>
            </div>
        </div>
    )
}

export default Header
