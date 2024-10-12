import React from 'react'
import CategoryList from './categorylist'
import ProductSearch from './productsearch'
import { ShoppingCart, UserIcon } from 'lucide-react'

const BottomHeader = () => {
  return (
    <div className='py-[20px] bg-[#fbfbfb]'>
        <div className="container flex flex-col sm:flex-row justify-between gap-[30px] sm-items-center">
            <CategoryList />
            <ProductSearch />
            <div className="flex gap-[10px] items-center">
              <UserIcon/>
              <ShoppingCart />
            </div>
        </div>
    </div>
  )
}

export default BottomHeader