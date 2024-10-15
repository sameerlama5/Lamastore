'use client'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import React from 'react'

const ProductList = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            let response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=8');
            let data = await response.json();
            setProduct(data);
        };
        fetchProducts();
    }, []);

    return (
      <div className="gap-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {product.map((item, index) => (
          <Card className='transition-all duration-600 transform hover:translate-y-[-10px] hover:shadow-lg' shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width={300}
                height={200}
                alt={item.title}
                className="w-full object-cover object-center"
                src={item.images[0]}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">${item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

export default ProductList;
