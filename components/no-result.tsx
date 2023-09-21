import useImageStore from '@/hooks/use-images'
import React from 'react'
import { Images } from './images/images'
import { Button } from './ui/button'

const NoResults = () => {

  const { setImages } = useImageStore()

  const images = Images;

  const onClick = () => {
    setImages(images)
  }

  return (
    <div className='flex flex-col space-y-3 items-center justify-center mt-48  h-full w-full text-neutral-500'>
      <p className=''>
        No results found
      </p>
      <Button variant='destructive' size='lg' onClick={onClick}>
        Reset
      </Button>
    </div>
  )
}

export default NoResults