import defaultImage from '/default-featured-image.png.jpg'

export default function ProcessCard({number = 1, 
    heading = 'heading', 
    subheading = 'subheading', 
    image = defaultImage,
})
{
    return(
        <div className="w-full max-w-sm flex flex-col">
            <div
             className="bg-dynamic h-[344px] rounded-t-2xl"
             style={{'--bg-image': `url(${image})`}}
            >    
            </div>
            <div className='px-6 py-8 bg-bandito-green rounded-b-2xl grow-1 flex flex-col gap-2'>
                <p className='text-4xl font-body font-bold text-bandito-green-200'>{number}</p>
                <h1 className='font-bold text-tundra text-2xl tracking-wider'>{heading}</h1>
                <p className='text-tundra leading-[175%] text-[16px]'>{subheading}</p>
            </div>
        </div>
    )
}