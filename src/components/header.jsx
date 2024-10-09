'use client'
import React from "react";
import Nav from "@/components/nav";
import MobileNav from "@/components/mobileNav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-[20px] shadow-sm">
      <div className="container flex justify-between items-center">
            <Link href="/">
            <h1 className="h3 font-semibold">
                Lama <span className="text-black">Store.</span>
            </h1>
            </Link>

            {/* desktop menu */}
            <div className="hidden xl:flex items-center">
            <Nav />
            </div>


            {/* mobile menu */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  );
};

export default Header;