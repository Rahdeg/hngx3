"use client"
import useFavorite from "@/hooks/use-favorite";
import { Images } from "@/typings";
import { useSortable } from "@dnd-kit/sortable";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CSS } from "@dnd-kit/utilities"
import { ActionTooltip } from "./action-tooltip";


interface ImageCardProps {
    image: Images

}

const ImageCard = ({ image }: ImageCardProps) => {
    const { addItem, removeItem, items } = useFavorite();
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: image.id })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }


    const [clicked, setClicked] = useState(items.some(item => item.id === image.id));


    useEffect(() => {
        return setClicked(items.some(item => item.id === image.id))
    }, [items, image.id]);






    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} data-testid="image-card" className="w-[350px] h-[250px] flex-col justify-start items-start gap-2 flex py-4 group cursor-pointer"  >
            <ActionTooltip label="Click and Drag Pictures to Re-arrange them" align="center" side="top">
                <div className="w-[350px] h-[250px] relative hover:scale-105 hover:shadow-xl">
                    <div className="w-[350px] h-[250px] left-0 top-0 absolute">
                        <div className="w-[350px] h-[250px] left-0 top-0 absolute bg-stone-300" />
                        <Image
                            src={image.src}
                            alt='gg'
                            fill
                            data-testid="image-poster"
                            className="rounded-sm object-cover md:rounded left-0 top-0 absolute"
                            loading="lazy"
                        />

                    </div>
                </div>
            </ActionTooltip>
        </div>
    );
};

export default ImageCard;
