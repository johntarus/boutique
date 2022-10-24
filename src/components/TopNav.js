import React from "react"
import { Link } from "react-router-dom"
import phone from "../assets/phone.svg"
import support from "../assets/support.svg"
import chevronDown from "../assets/chevronDown.svg"
import { AiFillFacebook } from "react-icons/ai"
import { AiFillTwitterSquare } from "react-icons/ai"
import { FaInstagramSquare } from "react-icons/fa"
import { FaWhatsappSquare } from "react-icons/fa"

const TopNav = () => {
    return (
        <div className="hidden md:flex justify-between items-center bg-[#F74F59]">
            <div className="flex text-white text-sm gap-6 items-center py-2 ml-16">
                <div className="flex items-center gap-1">
                    <img className="h-4 w-4 mt-1" src={phone} />
                    <p>+254-702-647-411</p>
                </div>
                <div className="flex items-center gap-1">
                    <img className="h-4 w-4 mt-1" src={support} />
                    <p>support@uniquefashion.com</p>
                </div>
            </div>
            <div className="flex items-center gap-12">
                <div className="flex md:hidden lg:flex gap-3">
                    <Link to={"/"}>
                        <AiFillFacebook fill="white" size={20} />
                    </Link>
                    <Link to={"/"}>
                        <AiFillTwitterSquare fill="white" size={20} />
                    </Link>
                    <Link to={"/"}>
                        <FaInstagramSquare fill="white" size={20} />
                    </Link>
                    <Link to={"/"}>
                        <FaWhatsappSquare fill="white" size={20} />
                    </Link>
                </div>
                <div className="flex gap-6 text-white text-xs mr-16 font-bold">
                    <p>FAQ&apos;s</p>
                    <p>LANGUAGE</p>
                    <div className="flex items-center gap-1">
                        <p>USD</p>
                        <img className="h-4 w-4" src={chevronDown} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav
