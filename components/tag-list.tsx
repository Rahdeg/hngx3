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

    const [isClicked, setIsClicked] = useState(false);


    const router = useRouter();



    const { images, setImages } = useImageStore()


    const allImages = Images;


    const onClick = (name: string) => {
        if (isClicked) {
            setImages(Images);
            setIsClicked(false)
        } else {
            setIsClicked(true)
            const tagImage = images.filter((image) => name === image.tag);
            if (tagImage) {
                setImages(tagImage)
            } else {
                setImages([])
            }
        }
    }

    return (
        <div className="flex items-center overflow-x-auto justify-center space-x-8 p-7 ">
            {
                tags && tags.map((tag) => (
                    <Button variant="outline" size="sm" className={cn(" text-black")} key={tag.id} onClick={() => onClick(tag.name)}>
                        {tag.name}
                    </Button>
                ))
            }
            <Button variant="outline" size="sm" className=" text-black" onClick={() => setImages(allImages)}>
                reset
            </Button>

        </div>
    );
};

export default TagList;
