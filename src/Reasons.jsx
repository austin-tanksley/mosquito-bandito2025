import ReasonCard from "./ReasonCard"

export default function Reasons() {
    return(
        <div id="learn-more"
        className="container mx-auto bg-bandito-tan px-4 py-18 md:px-18 sm:rounded-lg mb-8">
            <h2 className="mx-auto text-center font font-display mb-8 text-2xl">Why Choose Mosquito Bandito?</h2>
            <div className="mx-auto max-w-[768px] grid gap-4">
                <ReasonCard 
                    hiddenProp = {false}
                    title="Fast & Effective Results"
                    subtitle="See a dramatic reduction in mosquitoes within 24 hours of treatment."
                    body="Our scientifically formulated barrier spray starts working immediately upon application. Most customers report a noticeable decrease in mosquito activity within hours, not days. Our formula targets mosquitoes' nervous systems, eliminating them on contact while creating a repellent barrier that keeps new mosquitoes from entering your property. Unlike DIY solutions that provide temporary relief, our professional-grade treatments attack the problem at its source for truly effective results you can see and feel."
                />
                <ReasonCard
                    title="Long-Lasting Protection"
                    subtitle="Our barrier spray keeps mosquitoes away for up to 21 days between treatments."
                    body="The proprietary formula we use bonds to vegetation and continues to work for weeks after application. This extended protection means you don't need constant retreatments to maintain a mosquito-free environment. Our scheduled maintenance program times treatments perfectly to maintain continuous protection throughout mosquito season."
                    body2="While standard treatments last up to 21 days, we also offer special event treatments for weddings, parties, and gatherings that provide intensified short-term protection when you need it most."
                />
                <ReasonCard
                    title="Family & Pet Friendly"
                    subtitle="Safe formulations that protect your loved ones while eliminating mosquitoes. "
                    body="Your family's safety is our top priority. We've carefully selected products that target mosquitoes while being mindful of your loved ones, including children and pets. Our technicians are trained to apply treatments in a way that maximizes effectiveness while minimizing exposure to beneficial insects like bees and butterflies. "
                    body2="We recommend a brief 30-minute waiting period after application before returning to treated areas—after that, your outdoor spaces are ready to enjoy. All our products are EPA-registered and applied according to strict guidelines by our licensed professionals who prioritize your family's well-being with every treatment."
                />
                <ReasonCard
                    title="Professional Application"
                    subtitle="Trained technicians who know exactly where mosquitoes hide and breed. "
                    body="Mosquitoes are crafty insects that hide and breed in places most homeowners never think to check. Our certified technicians receive extensive training in mosquito biology and behavior, allowing them to identify and target the specific areas on your property where mosquitoes rest and breed throughout their lifecycle.  "
                    body2="We don't just spray indiscriminately—we conduct a thorough property assessment to identify harborage areas, standing water sources, and potential breeding grounds unique to your landscape. This targeted approach ensures maximum effectiveness with minimum product usage, treating the right places at the right time with precision and expertise that DIY methods simply can't match."
                />
            </div>
        </div>
    )
}