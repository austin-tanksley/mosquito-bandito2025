import { useState, useRef } from "react"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import MinusIcon from '/ic-minus.svg'

export default function ReasonCard({title='title', subtitle = 'subtitle', body = 'body goes here', body2 = '', hiddenProp = true}) {
    
    const [hidden, setHidden] = useState(hiddenProp)
    const plusLineRef = useRef(null)
    const bodyRef = useRef(null)

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.to(plusLineRef.current,{
            rotate: hidden? 90 : 0
        });

        if (!hidden) {
            gsap.to(bodyRef.current, {
                autoAlpha: 1,
                height: 'auto',
                duration: 0.4,
                ease: 'power2.out'
            });
        } else {
            gsap.to(bodyRef.current, {
                autoAlpha: 0,
                height: 0,
                duration: 0.3,
                ease: 'power2.in'
            })
        }
    },[hidden])



    return(
        <div className="p-4 bg-white max-w-[768px] rounded-lg shadow-lg">
            <div id="top" className="flex items-center gap-4 mb-2">

                <button onClick={() =>setHidden(h => !h)} className="relative rounded-4xl bg-bandito-tan p-2 hover:shadow-sm hover:bg-darker-tan duration-500">
                    <img src={MinusIcon} alt=""  className="h-[32px]"/>
                    <img 
                        src={MinusIcon} alt="" 
                        className=" absolute inset-0 m-auto h-[32px]" 
                        ref={plusLineRef}
                    />
                </button>

                <h3 className="font-body font-bold text-bandito-black">{title}</h3>    
            </div>
            <p className="font-body text-md font-semibold text-bandito-grey">{subtitle}</p>
            <p
                ref={bodyRef}
                style={{
                    opacity:0,
                    height: 0,
                    overflow: 'hidden',
                }}
                className=" mt-2 font-body text-md leading-[175%]"
            >
                {body}
                
                {body2? <span> <br /> <br />{body2}</span> : null}
            </p>
        </div>
    )
}