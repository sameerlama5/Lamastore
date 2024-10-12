import React from 'react'
import { Input } from './ui/input'
import { MagicWandIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'

const ProductSearch = () => {
  return (
    <div className='relative w-[100%] max-w-[600px]'>
        <Input className='focus-visible:ring-2 py-[20px] bg-[#fff]' type="text" placeholder="Search products..." />
      <button className='absolute top-[14px] right-[16px] text-3xl'>
        <MagnifyingGlassIcon className='text-3xl' />
        </button>
    </div>
  )
}

export default ProductSearch