import defaultImage from '/default-featured-image.png.jpg'

export default function ProcessCard({number = 1, 
    heading = 'heading', 
    subheading = 'subheading', 
    image = defaultImage,
})
{
    return(
        <div className="w-full max-w-xs py-8">
            <div
             className="bg-dynamic h-[344px] rounded-t-2xl"
             style={{'--bg-image': `url(${image})`}}
            >    
            </div>
            <div className='flex flex-col self-stretch bg-bandito-green rounded-b-2xl'>
                <p>{number}</p>
                <h1>{heading}</h1>
                <p>{subheading}</p>
            </div>
        </div>
    )
}