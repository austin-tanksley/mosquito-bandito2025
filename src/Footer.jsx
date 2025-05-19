import WhiteLogo from "/MosquitoBandito-Logo-White.svg"
import { FaPhone } from "react-icons/fa6";
import facebook from '/facebook.svg';
import instagram from '/instagram.svg';
import veteranOwned from '/veteran-owned.png'
import bbb from '/bbb.png'

const Footer = () => {

  return(
    <div className="bg-bandito-green pt-24 pb-12 flex items-center">
      <div className="container mx-auto grid gap-2 px-4">
        <img src={WhiteLogo} alt="Logo"></img>
        <div className="grid grid-rows-3 grid-cols-2 sm:grid-rows-2 items-end">
          <p className="col-start-1 col-end-3 text-tundra">© Copyright 2025  |  Mosquito Bandito LLC <br /><span className="text-bandito-green-200">Designed + Built by Rippled Studio</span></p>
          <div className="flex gap-2 items-center col-start-1 col-end-3 sm:col-end-2">
            <FaPhone className="text-tundra size-4"/>
            <a href="tel:+19186880232" className="text-tundra font-body">918-688-0232</a>
          </div>
          <div className="flex flex-auto gap-4 items-end col-start-1 col-end-3 sm:col-start-2 sm:justify-end">
            <a href="https://www.facebook.com/MosquitoBanditoOK/"> <img src={facebook} alt="facebook-logo" /></a>
            <a href="https://www.instagram.com/mosquitobanditook/"><img src={instagram} alt="instagram-logo" /></a>
            <img src={veteranOwned} alt="Veteran Owned Logo" />
            <img src={bbb} alt="Better Business Bureau Logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;