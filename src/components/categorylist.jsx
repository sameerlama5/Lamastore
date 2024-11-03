'use client'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import { useState, useEffect } from 'react'
import React from 'react'
import { Button } from './ui/button'
import { CiMenuFries } from 'react-icons/ci'

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
      <Dropdown>
        <DropdownTrigger>
          <Button className="bg-transparent shadow-none p-0 hover:bg-transparent focus-visible:ring-none focus-visible:ring-0 flex gap-[10px] justify-start">
            <CiMenuFries className='text-[#000]/80 text-2xl' />
            <span className='capitalize text-[18px] text-[#000]/50'>Shop by category</span>
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          {categories.map((item) => (
              <DropdownItem key={item.id}>
                {item.name}
              </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
}

export default CategoryList;
