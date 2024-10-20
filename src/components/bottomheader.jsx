import React from 'react'
import ProductSearch from './productsearch'
import { ShoppingCart, UserIcon } from 'lucide-react'
import CategoryList from './categorylist'

const BottomHeader = () => {
  return (
    <div className='py-[20px] bg-[#f1f1f1]'>
        <div className="container flex flex-col sm:flex-row justify-between gap-[30px] sm-items-center">
            <CategoryList />
            <ProductSearch />
            <div className="flex gap-[15px] items-center">
              <UserIcon/>
              <ShoppingCart />
            </div>
        </div>
    </div>
  )
}

export default BottomHeader