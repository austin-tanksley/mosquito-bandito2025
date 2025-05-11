import HERO_IMAGE from '/mb-hero.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


export default function Hero() {

    gsap.registerPlugin(useGSAP);

    useGSAP(() =>{
        gsap.from('.hero', {y:50})
    },[])

    return (
        <div className="hero container bg-dynamic flex flex-col justify-between items-center aspect-square p-4 mx-auto sm:aspect-auto sm:h-[580px] sm:rounded-xl sm:p-[48px] min-w-[340px] lg:flex-row lg:items-end 2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-8 shadow-2xl mb-8"
        style={{ '--bg-image': `URL(${HERO_IMAGE})`}}>
            <h1 className='text-[28px] leading-[150%] text-center font-display text-tundra sm:text-[48px] lg:text-left 2xl:max-w-[50%]'
            >Make your way outside to a <span className='whitespace-nowrap'><span className='bg-bandito-red rounded-lg px-2 pb-2 whitespace-nowrap'>mosquito free</span> yard.</span>
            </h1>
            <div className='flex justify-center gap-[12px] lg:basis-1/2 2xl:flex-initial'>
                <button className='text-tundra border-2 border-solid py-2 px-2 rounded-lg font-semibold'
                >Learn More</button>
                <button
                    className='text-tundra bg-bandito-red py-2 px-3 rounded-lg font-semibold'
                    ><a href='#learn-more' >Request Quote</a></button>
            </div>
        </div>
    )
}