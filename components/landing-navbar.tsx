"use client"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

const LandingNavbar = () => {

    const { isSignedIn } = useAuth();

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href='/' className=" flex items-center">
                <p className={cn(" text-xl md:text-3xl font-bold text-white", font.className)}>
                    PIX-ROOM
                </p>
            </Link>
            <div className=" flex items-center gap-x-2">
                <Link href={isSignedIn ? "/dashboard" : "sign-in"} className=" text-black">
                    <Button variant="outline" className=" rounded-full">
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    )
}

export default LandingNavbar