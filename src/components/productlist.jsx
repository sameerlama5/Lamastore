'use client'
import { useState, useEffect } from 'react'
import React from 'react'

const ProductList = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            let response = await fetch('https://api.escuelajs.co/api/v1/products');
            let data = await response.json();
            setProduct(data);
        };
        fetchProducts();
    }, []);

    return (
      <ul>
        {categories.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
  );
}

export default ProductList;
