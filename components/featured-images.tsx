"use client"

import MovieList from "./image-list";
import { Images } from "@/typings";

import { useEffect } from "react"
import { useRouter } from "next/navigation";


import TagList from "./tag-list";
import useImageStore from "@/hooks/use-images";
import NoResults from "./no-result";



interface FeaturedImagesProps {
    allImages: Images[]
}

const FeaturedImages = ({ allImages }: FeaturedImagesProps) => {



    const router = useRouter();


    const setImages = useImageStore((state) => state.setImages);

    useEffect(() => {
        return setImages(allImages);

    }, [allImages, setImages]);

    const { images } = useImageStore()



    return (

        <div className="flex flex-col bg-white   ">
            <div className=" ">
                <TagList />
            </div>
            {
                images.length ? (<MovieList data={images} />) : (<NoResults />)
            }

        </div>

    );
};

export default FeaturedImages;
