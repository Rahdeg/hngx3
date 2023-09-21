"use client"
import Link from 'next/link'
import React from 'react'
import TypewriterComponent from "typewriter-effect"
import { Button } from './ui/button'

const LandingHero = () => {

    return (
        <div className=' text-white font-bold py-36 text-center  space-y-12 '>
            <div className=' text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
                <h1>The Best Online Picture Gallery</h1>
                <div className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-10'>
                    <TypewriterComponent
                        options={{
                            strings: [
                                "background",
                                "nature",
                                "sky",
                                "food",
                                "flowers",

                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
            </div>
            <div>
                <Link href="/dashboard"  >
                    <Button variant="premium" className=' md:text-lg p-4 md:p-6 rounded-full font-semibold'>
                        Goto Dashboard
                    </Button>
                </Link>
            </div>
            <div className=' text-zinc-400 text-xs md:text-sm font-normal'>
                You will definately like what you see !
            </div>
        </div>
    )
}

export default LandingHero