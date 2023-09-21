"use client"
import Image from "next/image"




const Banner = () => {



    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[60vh] lg:justify-end lg:pb-12  ">
            <div className="absolute top-0 left-0 -z-10 h-[60vh] w-screen">
                <Image
                    src="https://res.cloudinary.com/djdyxth0z/image/upload/v1695287782/hngx/bg2_dwp1cj.jpg" width={1800} height={150}
                    alt='img'
                    className=" "
                    loading="lazy"
                />
            </div>


        </div>
    )
}

export default Banner