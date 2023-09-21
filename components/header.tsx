"use client"
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import SearchInput from './search-input'
import { UserButton, useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'



const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const router = useRouter();

    const { isSignedIn } = useAuth();


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])


    return (
        <header className={cn("text-white  md:px-10 fixed top-0 z-50 flex w-full items-center justify-between px-4 py-1 transition-all lg:px-10 lg:py-3", isScrolled && ' bg-[#2596be]')}>
            <div className=" justify-start items-center flex">

                <div className="text-white flex text-2xl font-bold leading-normal">PIX-ROOM</div>
            </div>

            <SearchInput />

            <div className=" h-9 justify-start items-center gap-2 inline-flex">
                {
                    isSignedIn ? (<div className="w-9 h-9 ">
                        <UserButton afterSignOutUrl="/" appearance={{

                        }} />


                    </div>) : (
                        <div className='flex items-center justify-center space-x-3'>
                            <Button onClick={() => router.push("/sign-in")} className="text-white text-base font-bold hidden md:flex leading-normal cursor-pointer bg-slate-600">Sign in
                            </Button>
                            <Button onClick={() => router.push("/sign-up")} className="text-white text-base font-bold hidden md:flex leading-normal cursor-pointer bg-slate-600">Register
                            </Button>
                        </div>


                    )
                }


            </div>

        </header>
    )
}

export default Header