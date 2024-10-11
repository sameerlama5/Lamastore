'use client'
import { useState, useEffect } from 'react'
import React from 'react'

const CategoryList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            let response = await fetch('https://api.escuelajs.co/api/v1/categories');
            let data = await response.json();
            setCategories(data);
        };
        fetchCategories();
    }, []);

    return (
        <ul>
          {categories.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
    );
}

export default CategoryList;
