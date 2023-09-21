"use client"
import useFavorite from "@/hooks/use-favorite";
import { cn } from "@/lib/utils";
import { Images } from "@/typings";
import { useSortable } from "@dnd-kit/sortable";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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


    const router = useRouter();


    const onAction = (e: React.MouseEvent, image: Images) => {
        e.stopPropagation()
        if (clicked) {
            removeItem(image.id)
            return setClicked(false);

        } else {
            addItem(image)
            return setClicked(true)
        }
    }



    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} data-testid="movie-card" className="w-[350px] h-[250px] flex-col justify-start items-start gap-2 flex py-4 group cursor-pointer"  >
            <ActionTooltip label="Click and Drag Pictures to Re-arrange them" align="center" side="top">
                <div className="w-[350px] h-[250px] relative">
                    <div className="w-[350px] h-[250px] left-0 top-0 absolute">
                        <div className="w-[350px] h-[250px] left-0 top-0 absolute bg-stone-300" />
                        <Image
                            src={image.src}
                            alt='gg'
                            fill
                            data-testid="movie-poster"
                            className="rounded-sm object-cover md:rounded left-0 top-0 absolute"
                        />

                    </div>
                    <div className="w-[218px] h-[29.21px] pl-[188px] left-[16px] top-[15.58px] absolute justify-end items-center inline-flex">
                        <div className="w-[30px] h-[29.21px] relative">
                            <div onClick={(e) => onAction(e, image)} className={cn("w-[30px] h-[29.21px] flex items-center justify-center left-16 top-0 absolute text-gray-100  ", clicked && "text-red-900  backdrop-blur-none")} >
                                <Heart className={cn("", clicked && "fill-red-900")} />
                            </div>

                        </div>
                    </div>
                </div>
            </ActionTooltip>
        </div>
    );
};

export default ImageCard;
