import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";

export function HeroSection() {
    return (
        <div className="h-[35rem] md:h-[43rem]  w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
            <Spotlight
                className="-top-40 sm:-top-10 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl mx-auto relative z-10  w-full pt-56 md:pt-0 ">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
                    Save Your <br /> Time and Money.
                </h1>
                <p className="mt-4 font-normal text-sm sm:text-base text-neutral-300 max-w-xl text-center mx-auto">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, hic aperiam! Et aliquam itaque incidunt culpa adipisci ad labore error.
                </p>
            </div>
        </div>
    );
}
