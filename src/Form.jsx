

const Form = () => {
return (
  <div className="container px-2 mx-auto">
    <div className=" border-solid border-[2px] border-bandito-grey-400 py-12 px-8 rounded-2xl">
      <div>
        <div className="headings mb-4">
          <h2>Request a Quote</h2>
          <p>We’ll give you a call, and schedule a good time to come out and assess your property.  </p>
        </div>
        <form action=""
          className="grid gap-4"
        >
          <div className="form-ite grid">
            <label htmlFor="Firs-Name" className="font-body text-bandito-grey-400 text-sm font-semibold">First Name*</label>
            <input type="text" id="First-Name" className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div className="form-item grid">
            <label htmlFor="Last-Name" className="font-body text-bandito-grey-400 text-sm font-semibold">First Name*</label>
            <input type="text" id="Last-Name" className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div className="form-item grid">
            <label htmlFor="Email" className="font-body text-bandito-grey-400 text-sm font-semibold" >Email*</label>
            <input type="text" id="Email" required className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div className="form-item grid">
            <label htmlFor="Phone" className="font-body text-bandito-grey-400 text-sm font-semibold" >Phone Number*</label>
            <input type="text" id="Phone" required className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div className="form-item grid">
            <label htmlFor="Street-Address" className="font-body text-bandito-grey-400 text-sm font-semibold" >Street Adress*</label>
            <input type="text" id="Street-Address" required className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div className="form-item grid">
            <label htmlFor="Apartment" className="font-body text-bandito-grey-400 text-sm font-semibold" >Apt., Suite, Etc.</label>
            <input type="text" id="Apartment" required className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <div className="form-item grid">
            <label htmlFor="Zip-Code" className="font-body text-bandito-grey-400 text-sm font-semibold" >Zip Code*</label>
            <input type="text" id="Zip-Code" required className="inset-shadow-sm inset-shadow-bandito-grey bg-white p-2 rounded-lg"/>
          </div>
          <button className="justify-self-end bg-bandito-green-400 text-tundra px-6 py-2 rounded-lg border-solid border-bandito-green border-[2px]">Request</button>
        </form>
      </div>
    </div>
  </div>
)
}

export default Form;