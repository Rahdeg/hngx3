"use client"


import { Images } from "@/typings";

import { useEffect } from "react"
import { useRouter } from "next/navigation";


import TagList from "./tag-list";
import useImageStore from "@/hooks/use-images";
import NoResults from "./no-result";
import ImageList from "./image-list";



interface FeaturedImagesProps {
    allImages: Images[]
}

const FeaturedImages = ({ allImages }: FeaturedImagesProps) => {


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
                images.length ? (<ImageList data={images} />) : (<NoResults />)
            }

        </div>

    );
};

export default FeaturedImages;
