"use client"
import { Search } from 'lucide-react'
import React, { ChangeEventHandler, useCallback, useEffect, useState } from 'react'
import { Input } from './ui/input'
import { useDebounce } from '@/hooks/use-debounce'

import useImageStore from '@/hooks/use-images'


const SearchInput = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce<string>(value, 1000)
  const { images } = useImageStore()
  const setImages = useImageStore((state) => state.setImages);






  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }


  const searchProduct = useCallback(async () => {
    const searchImage = images.filter((image) => debounceValue === image.tag)
    setImages(searchImage);
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue])


  useEffect(() => {
    searchProduct();

  }, [searchProduct]);


  return (

    <div className=' relative w-1/3 bg-transparent '>
      <Search className='absolute h-4 w-4 top-2 right-4 text-muted-foreground' />
      <Input
        onChange={onChange}
        value={value}
        placeholder='Search...' className='pl-2 w-full h-8 bg-transparent' />
    </div>


  )
}

export default SearchInput