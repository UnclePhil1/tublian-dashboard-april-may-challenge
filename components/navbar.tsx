// NAVAGATION COMPONENT FOR THE TUBLIAN SITE
import React from "react";
import Link from "next/link";
import { SelectCard } from "./seleector";

const Navbar = () => {
    return (
        <div>
            <div className="w-full py-4 md:px-8 flex justify-between items-center transform backdrop-blur-md md:border border-secondary/10 rounded-t-lg">
                <div className="flex flex-col justify-start items-start p-0">
                    <h2 className="m-0 p-0">
                        <Link href={'/'} className="font-semibold text-secondary">Find Developers</Link>
                    </h2>
                </div>
                <div className="justify-center items-center gap-2 hidden md:flex">
                    <SelectCard />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
