import ProcessCard from "./ProcessCard"
import propertyAssessment from "/property-assessment.jpg"
import application from "/Application.jpg"
import protection from "/Protection.jpg"
import { forwardRef } from "react"

const Process = forwardRef((_,ref) =>
{
    return (
        <div ref={ref}
            className="container py-12 mx-auto px-4 max-w-[1280px]"
            id="process"
        >
            <h2 
                className="mx-auto py-4 text-bandito-green border-b-bandito-red border-b-3 font-display text-3xl w-fit"
            >
                Our 3-Step Mosquito Protection Process
            </h2>
            <div 
                className="py-8 grid grid-cols-1 justify-items-center items-stretch gap-4 lg:grid-cols-3 lg:grid-rows-1"
            >
                <ProcessCard 
                  heading="Property Assessment"
                  subheading="Our technicians identify mosquito breeding grounds and resting areas unique to your property."
                  image = {propertyAssessment}
                />
                <ProcessCard number={2}
                  heading="Targeted Application"
                  subheading="We apply our barrier treatment to vegetation, harborages, and other mosquito hotspots, creating a protective shield around your outdoor spaces."
                  image={application}
                />
                <ProcessCard number={3} 
                  heading="Ongoing Protection"
                  subheading="The treatment eliminates mosquitoes on contact and continues working for weeks, while our scheduled follow-ups ensure continuous protection all season long."
                  image={protection}
                />
            </div>
        </div>
    )
});
export default Process;