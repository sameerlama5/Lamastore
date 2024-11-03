'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export function CategoryCard() {
  const [categoryCards, setCategoryCards] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories')
        const data = await response.json()
        setCategoryCards(data.slice(0, 4)) 
      }
    fetchCategories()
  }, [])

  return (
    (<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
      {categoryCards.map((item) => (
        <div key={item.id} className="relative aspect-square">
          <Image src={item.image} alt={item.name} fill className="object-cover rounded-lg" />
          <div
            className="absolute inset-0 flex items-end ps-[30px] pb-[30px] bg-gradient-to-t from-black/60 to-transparent rounded-lg">
            <h3 className="text-lg font-semibold text-white">
              {item.name}
            </h3>
          </div>
        </div>
      ))}
    </div>)
  );
}