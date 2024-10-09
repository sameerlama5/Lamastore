"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main>
      <section className="bg-[url('/assets/image/banner-image-ecommerce-app.jpg')] bg-no-repeat bg-center bg-cover  py-[100px] h-[60vh] flex items-center">
        <div className="container">
          <div>
            <h1 className="text-[#fff] mb-[10px]">Welcome to our website!</h1>
            <p className="text-[#fff] mb-[30px]">
              This is the home page of our React application.
            </p>
            <Link href="./shop">
              <Button className="py-[15px] px-[30px] font-semibold bg-[#00a0de] hover:bg-[#fff] hover:text-[#00a0de] transition-all duration-500">Shop Now</Button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          
        </div>
      </section>
    </main>
  );
};

export default Home;
