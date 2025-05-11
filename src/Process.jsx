import ProcessCard from "./ProcessCard"

export default function Process()
{
    return (
        <div 
            className="container mx-auto px-4"
            id="process"
        >
            <h2 
                className="text-center py-4 border-b-bandito-red border-b-2 font-display text-2xl"
            >
                Our 3-Step Mosquito Protection Process
            </h2>
            <div 
                className="grid grid-cols-1 justify-items-center"
            >
                <ProcessCard />
            </div>
        </div>
    )
}
