"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await fetch(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=8"
      );
      let data = await response.json();
      setProduct(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="gap-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {product.map((item, index) => (
        <Card
          className="group transition-all duration-600 hover:shadow-lg"
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0 relative">
            <Image
              shadow="sm"
              radius="lg"
              width={300}
              height={200}
              alt={item.title}
              className="w-full object-cover object-center"
              src={item.images[0] || "/default-image.jpg"}
              unoptimized
            />
            <Link
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 nline-flex mx-auto opacity-0 bg-[#00a0de] hover:bg-[#2e3192] py-[10px] px-[30px] rounded-3xl text-white transition-all duration-500 group-hover:opacity-100"
              href="#"
            >
              Add to cart
            </Link>
          </CardBody>
          <CardFooter className="text-small block">
            <div className="flex justify-between mb-3">
              <b>{item.title}</b>
              <p className="text-default-500">${item.price}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
