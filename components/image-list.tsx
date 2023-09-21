"use client"
import { Images } from "@/typings";
import { DndContext, closestCenter, } from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import useImageStore from "@/hooks/use-images";
import { useEffect, useState } from "react";
import ImageCard from "./image-card";
import { Images as allImage } from "./images/images";


interface ImageListProps {
    data: Images[]
}

const ImageList = ({ data }: ImageListProps) => {

    const { images } = useImageStore()

    const [imagess, setimagess] = useState(images);

    const setImages = useImageStore((state) => state.setImages);

    const allImages = allImage



    const onDragEnd = (event: any) => {
        const { active, over } = event;
        if (active.id === over.id) {
            return;
        }

        setimagess((imagess) => {
            const oldIndex = imagess.findIndex((image: any) => image.id === active.id)
            const newIndex = imagess.findIndex((image: any) => image.id === over.id)

            return arrayMove(imagess, oldIndex, newIndex)
        })

    }

    useEffect(() => {

        setImages(imagess)

    }, [imagess, setImages]);


    return (

        <div className=" flex items-center justify-center">

            {
                data.length ? (
                    <div className="grid grid-cols-1 sm:grid-cols-1 ml-0 md:grid-cols-2 gap-5  lg:grid-cols-3 xl:grid-cols-4 mb-6">
                        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>

                            {
                                images.map((item) => (
                                    <ImageCard image={item} key={item.id} />
                                ))
                            }

                        </DndContext>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-1 ml-0 md:grid-cols-2 gap-5  lg:grid-cols-3 xl:grid-cols-4 mb-6">
                        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>

                            {
                                allImages.map((item) => (
                                    <ImageCard image={item} key={item.id} />
                                ))
                            }

                        </DndContext>
                    </div>
                )
            }

        </div>
    );
};

export default ImageList;

