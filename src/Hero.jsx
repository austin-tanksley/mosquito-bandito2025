import HERO_IMAGE from '/mb-hero.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


export default function Hero({requestQuoteRef, learnMoreRef}) {

    gsap.registerPlugin(useGSAP);

    useGSAP(() =>{
        gsap.from('.hero', {y:50})
    },[])

  const scrollToLearnMore = () => {
    learnMoreRef.current?.scrollIntoView({behavior:"smooth"});
  }
  const scrollToRequestQuote = () => {
    requestQuoteRef.current?.scrollIntoView({behavior:"smooth"});
  }

    return (
        <div className="hero container bg-dynamic flex flex-col justify-between items-center aspect-square p-4 mx-auto sm:aspect-auto sm:h-[580px] sm:rounded-xl sm:p-[48px] min-w-[340px] lg:flex-row lg:items-end 2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-8 shadow-2xl mb-8"
        style={{ '--bg-image': `URL(${HERO_IMAGE})`}}>
            <h1 className='text-[28px] leading-[150%] text-center font-display text-tundra sm:text-[48px] lg:text-left 2xl:max-w-[50%]'
            >Make your way outside to a <span className='whitespace-nowrap'><span className='bg-bandito-red rounded-lg px-2 pb-2 whitespace-nowrap'>mosquito free</span> yard.</span>
            </h1>
            <div className='flex justify-center gap-[12px] lg:basis-1/2 2xl:flex-initial'>
                <button 
                  onClick={()=> scrollToLearnMore()}
                  className='text-tundra border-2 border-solid py-2 px-2 rounded-lg font-semibold hover:bg-bandito-red-400 duration-500'
                >Learn More</button>
                <button
                    onClick={()=> scrollToRequestQuote()}
                    className='text-tundra bg-bandito-red py-2 px-3 rounded-lg font-semibold border-bandito-red border-2 hover:border-tundra duration-500'
                    >Request Quote</button>
            </div>
        </div>
    )
} 