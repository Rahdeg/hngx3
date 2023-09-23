"use client"
import { Search } from 'lucide-react'
import React, { ChangeEventHandler, useCallback, useEffect, useState } from 'react'
import { Input } from './ui/input'
import useImageStore from '@/hooks/use-images'
import { Images } from './images/images'


const SearchInput = () => {
  const images = Images;
  const setImages = useImageStore((state) => state.setImages);



  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setImages(() => {
      return images.filter((item) =>
        item.tag.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
  }




  return (

    <div className=' relative w-1/3 bg-transparent '>
      <Search className='absolute h-4 w-4 top-2 right-4 text-muted-foreground ' />
      <Input
        onChange={onChange}
        placeholder='Search...' className='pl-2 w-full h-8 bg-white text-black' />
    </div>


  )
}

export default SearchInput