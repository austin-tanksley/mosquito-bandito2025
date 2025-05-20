import { forwardRef } from "react";


const Form = forwardRef((_,ref) => 
{
return (
  <div
    ref={ref}
    className="container px-2 mx-auto mb-24">
    <div className="border-solid border-[3px] border-bandito-grey-400 py-12 px-8 rounded-2xl">
      <div className="grid xl:grid-cols-2">
        <div className="headings mb-4">
          <h2 className="  font-display text-2xl mb-4">Request a Quote</h2>
          <p className="pb-4 mr-4 border-b-4 w-fit border-bandito-red font-body ">We’ll give you a call, and schedule a good time to come out and assess your property.  </p>
        </div>
        <form name="request quote" netlify method="POST"
          className="grid gap-4 md:grid-cols-2"
        >
          <div className="form-item grid">
            <label htmlFor="first-name" className="font-body text-bandito-grey-400 text-sm font-semibold">First Name*</label>
            <input  required autoComplete="given-name" type="text" id="first-name" className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div className="form-item grid">
            <label htmlFor="last-name" className="font-body text-bandito-grey-400 text-sm font-semibold">Last Name*</label>
            <input required autoComplete="family-name" type="text" id="last-name" className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div className="form-item grid">
            <label htmlFor="email" className="font-body text-bandito-grey-400 text-sm font-semibold" >Email*</label>
            <input required autoComplete="email" type="email" id="email" className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div className="form-item grid">
            <label htmlFor="phone" className="font-body text-bandito-grey-400 text-sm font-semibold" >Phone Number*</label>
            <input autoComplete="on" type="text" id="phone" required className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div className="form-item grid">
            <label htmlFor="street-address" className="font-body text-bandito-grey-400 text-sm font-semibold" >Street Adress*</label>
            <input autoComplete="street-address" type="text" id="street-address" required className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div className="form-item grid">
            <label htmlFor="city" className="font-body text-bandito-grey-400 text-sm font-semibold" >City*</label>
            <input autoComplete="on" type="text" id="city" required className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div className="form-item grid">
            <label htmlFor="state" className="font-body text-bandito-grey-400 text-sm font-semibold" >State*</label>
            <input autoComplete="on" type="text" id="state" required className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div className="form-item grid">
            <label htmlFor="apartment" className="font-body text-bandito-grey-400 text-sm font-semibold" >Apt., Suite, Etc.</label>
            <input autoComplete="off" type="text" id="apartment" className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div className="form-item grid">
            <label htmlFor="zip-code" className="font-body text-bandito-grey-400 text-sm font-semibold" >Zip Code*</label>
            <input autoComplete="on" type="text" id="zip-code" required className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div></div>
          <div></div>
          <button type="submit" className="justify-self-end bg-bandito-green-400 text-tundra px-6 py-2 rounded-lg border-solid border-bandito-green border-[3px] hover:bg-bandito-green-200 duration-500">Request</button>
        </form>
      </div>
    </div>
  </div>
)
});

export default Form;