"use client";

import CategoryList from "@/components/categorylist";
import ProductList from "@/components/productlist";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main>
      <section className="h-full py-[80px]">
        <div className="container">
          <div className="grid gap-[50px] grid-cols-1 items-center md:grid-cols-2">
            <div className="max-w-[630px]">
              <h1 className="text-[#000] mb-[10px]">
                Mega Sale <span className="text-orange-500">Special</span>{" "}
                <br /> Offer up to <span className="text-red-500">60%</span> Off
              </h1>
              <p className="mb-[30px] w-[100%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                amet facilis iste laboriosam corrupti neque ducimus quam quod
                illum debitis, minima ipsam similique odit nemo consectetur
                fugiat blanditiis in illo!
              </p>
              <div className="flex gap-[20px]">
                <Link href="./shop">
                  <Button className="py-[25px] px-[35px] font-semibold border-2 border-[#00a0de] bg-[#00a0de] hover:border-[#2e3192] hover:bg-[#2e3192] transition-all duration-500">
                    Shop Now
                  </Button>
                </Link>
                <Link href="#">
                  <Button className="py-[25px] px-[35px] font-semibold bg-transparent text-[#00a0de] border-2 border-[#00a0de] hover:bg-[#00a0de] hover:text-[#fff] transition-all duration-500">
                    Explore More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <figure className="banner-Img">
                <Image
                  width={400}
                  height={400}
                  alt="NextUI hero Image"
                  className="cover"
                  src="/assets/image/banner lama store image.png"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <ProductList />
        </div>
      </section>
    </main>
  );
};

export default Home;
