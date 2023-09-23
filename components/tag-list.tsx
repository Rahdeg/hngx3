"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";
import useImageStore from "@/hooks/use-images";
import { Images } from "./images/images";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";


const tags = [
    {
        name: "background",
        id: 1
    },
    {
        name: "cat",
        id: 2
    },
    {
        name: "nature",
        id: 3
    },
    {
        name: "sky",
        id: 4
    },
    {
        name: "food",
        id: 5
    },
    {
        name: "flowers",
        id: 6
    },

]


const TagList = () => {

    const [isTag, setIsTag] = useState('');


    const { setImages } = useImageStore()


    const allImages = Images;


    const onClick = (name: string) => {
        const tagImage = allImages.filter((image) => name === image.tag);
        setIsTag(tagImage[0].tag)
        setImages(tagImage)
    }

    const reset = () => {
        setIsTag('')
        setImages(allImages)
    }

    return (
        <div className="flex items-center overflow-x-auto justify-center space-x-8 p-7 ">
            {
                tags && tags.map((tag) => (
                    <Button variant="outline" size="sm" className={cn(" text-black", tag.name === isTag && "bg-[#2596be]")} key={tag.id} onClick={() => onClick(tag.name)}>
                        {tag.name}
                    </Button>
                ))
            }
            <Button variant="outline" size="sm" className=" text-black" onClick={reset}>
                reset
            </Button>

        </div>
    );
};

export default TagList;
