import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import cart from "../assets/cart.svg"
import search from "../assets/search.svg"
import clossedBars from "../assets/clossedbars.svg"
import mobileSearch from "../assets/mobileSearch.svg"
import openBars from "../assets/openBars.svg"
import user from "../assets/user.svg"
import mobileUser from "../assets/mobileUser.svg"
import "../index.css"
import "./style.css"

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => setIsOpen(!isOpen)
    return (
        <>
            <div className="hidden md:flex justify-between mt-4 mx-16 items-center font-semibold">
                <div>
                    <img className="w-18 h-4" src={logo} />
                </div>
                <div className="flex list-none text-lg">
                    <Link to={"/"} className="mx-6">
                        Home
                    </Link>
                    <Link className="mx-6">Shop</Link>
                    <Link className="mx-6">Blog</Link>
                    <Link className="mx-6">Contact</Link>
                </div>
                <div className="flex lg:gap-2">
                    <img className="md:mx-2" src={search} />
                    <img className="md:mx-2 h-6 w-6" src={user} />
                    <div className="relative lg:mx-4 md:gap-1">
                        <img src={cart} />
                        <div className="absolute flex justify-center items-center text-white -top-1 right-0 left-4 bg-[#F7444E] h-5 w-5 rounded-full">
                            <p className="">0</p>
                        </div>
                    </div>
                    <p className="md:hidden lg:flex">KSh 0.00</p>
                </div>
            </div>
            {/* Mobile Navigation */}
            <div className="md:hidden">
                <div className="flex justify-between items-center mt-6 mx-6">
                    <img className="w-18 h-6" src={logo} />
                    <div className="flex justify-center items-center">
                        <div className="relative">
                            <img className="mx-6" src={cart} />
                            <div className="absolute flex justify-center items-center -top-1 right-4 bg-[#F7444E] h-5 w-5 rounded-full">
                                <p className=" text-white">0</p>
                            </div>
                        </div>
                        <div>
                            <img
                                onClick={handleClick}
                                className="h-8 w-8"
                                src={isOpen ? openBars : clossedBars}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    {isOpen && (
                        <ul className="nav flex flex-col list-none text-lg text-white justify-center bg-black h-[calc(100vh-60px)] w-72 font-semibold">
                            <Link
                                to={"/"}
                                onClick={handleClick}
                                className="mx- m-8"
                            >
                                Home
                            </Link>
                            <Link onClick={handleClick} className="m-8">
                                Shop
                            </Link>
                            <Link onClick={handleClick} className="m-8">
                                Blog
                            </Link>
                            <Link onClick={handleClick} className="m-8">
                                Contact
                            </Link>
                            <div className="flex">
                                <img
                                    onClick={handleClick}
                                    className="ml-8 h-6 w-6"
                                    src={mobileUser}
                                />
                                <img
                                    onClick={handleClick}
                                    className="mx-8"
                                    src={mobileSearch}
                                />
                            </div>
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}

export default NavigationBar
