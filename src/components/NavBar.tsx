"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Logo from '../../public/Images/Logo.png'
import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";


export function NavBar() {
    return (
        <Navbar />
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [navActive, setNavActive] = useState<boolean>(false)
    const [dropdown, setDropdown] = useState<boolean>(false)
    return (
        <div className={cn("fixed top-5 inset-x-0 max-w-5xl mx-auto z-40", className)}>
            <a href="#" target="_self" className=" absolute z-40 left-3 -mt-[5px] cursor-pointer">
                <Image src={Logo} alt="logo" className="w-52 sm:w-56  " />
            </a>
            <Menu setActive={setActive} >
                <div className="hidden sm:flex gap-5 ">
                    <Link href={'/'}>
                        <MenuItem setActive={setActive} active={active} item="Home">
                        </MenuItem>
                    </Link>
                    <MenuItem setActive={setActive} active={active} item="Services">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="#">Hobby</HoveredLink>
                            <HoveredLink href="#">Individual</HoveredLink>
                            <HoveredLink href="#">Team</HoveredLink>
                        </div>
                    </MenuItem>
                    <Link href={'#'}>
                        <MenuItem setActive={setActive} active={active} item="About">
                        </MenuItem>
                    </Link>
                    <Link href={'#'}>
                        <MenuItem setActive={setActive} active={active} item="Contact">
                        </MenuItem>
                    </Link>
                </div>
                <div className="block sm:hidden" onClick={() => setNavActive(!navActive)}>
                    <HiBars3 className=" fill-white z-40  w-8 h-8 -mt-2 cursor-pointer" />
                </div>
            </Menu>
            {
                navActive &&
                <div className="bg-bg-colorTwo fixed top-0 w-screen h-screen text-white z-50">
                    <div className="flex flex-col gap-16 mt-5">
                        <div className=" flex align-center justify-between px-4">
                            <a href="#" target="_self">
                                <Image src={Logo} alt="logo" className="w-52 sm:w-56  " />
                            </a>
                            <div className="border border-white w-8 h-8 flex justify-center align-center  my-auto rounded-full cursor-pointer p-1 mr-2">
                                <RxCross2 onClick={() => setNavActive(!navActive)} className="text-white w-6 h-6 pb-1" />
                            </div>
                        </div>
                        <div className="flex  px-10">
                            <ul className="flex flex-col gap-5  w-full">
                                <li className="border-b py-1 ">
                                    <Link href={'/'}>Home</Link>
                                </li>
                                <li className="border-b py-1">
                                    <span className="flex gap-2 py-1" onClick={() => setDropdown(!dropdown)}>
                                        <Link href={'/'}>Services</Link>
                                        <IoIosArrowDown className={`${dropdown === true ? 'text-blue' : ''} mt-1.5 cursor-pointer`} />
                                    </span>
                                    {
                                        dropdown && <ul className="flex flex-col gap-5 border-t pt-5">
                                            <li className="border-b py-1 "> <Link href={'/'}>Hobby</Link></li>
                                            <li className="border-b py-1 "> <Link href={'/'}>Hobby</Link></li>
                                            <li className=" "> <Link href={'/'}>Hobby</Link></li>
                                        </ul>
                                    }
                                </li>
                                <li className="border-b py-1 ">
                                    <Link href={'/'}>About</Link>
                                </li>
                                <li className="border-b py-1 ">
                                    <Link href={'/'}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
