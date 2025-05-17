import ProcessCard from "./ProcessCard"

export default function Process()
{
    return (
        <div 
            className="container mx-auto px-4 max-w-[1024px]"
            id="process"
        >
            <h2 
                className="mx-auto py-4 border-b-bandito-red border-b-2 font-display text-2xl w-fit"
            >
                Our 3-Step Mosquito Protection Process
            </h2>
            <div 
                className="py-8 grid grid-cols-1 justify-items-center items-stretch gap-4 lg:grid-cols-3 lg:grid-rows-1"
            >
                <ProcessCard 
                  heading="Property Assessment"
                  subheading="Our technicians identify mosquito breeding grounds and resting areas unique to your property."
                />
                <ProcessCard number={2} />
                <ProcessCard number={3} />
            </div>
        </div>
    )
}
