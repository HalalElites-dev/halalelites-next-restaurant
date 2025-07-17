'use client';
import React from 'react'
import { Button } from '../ui/button'
import { Navigation } from './Navigation'
import { MobileMenu } from '@/components/layout/mobileMenu'
import Image from 'next/image';
import { HERO_CTA_LINK } from '@/lib/constants';
import Link from 'next/link';

export function Header() {
    return (
        <header className='top-0 z-50  right-0 left-0 flex fixed justify-center  '>
            <nav className='max-w-7xl mx-6 mt-2 bg-foreground backdrop-blur-md rounded-full px-24 py-4 md:px-6 md:py-2 shadow-2xl flex items-center justify-evenly  gap-x-12 md:gap-x-10'>
                {/* left section: Site title or logo*/}

                <div className='flex items-center space-x-2'>
                    <Image
                        alt='logo'
                        src='/twospoonlogo.png'
                        width={80}
                        height={100}
                    />

                </div>


                {/* middle section: Desktop Navigation */}
                <div className="hidden md:flex">
                    <Navigation />
                </div>


                {/* Right Section: Theme Toggle, CTA Button (Desktop) & Mobile Menu (Mobile) */}
                <div className='flex items-center space-x-2'>
                    {/* Desktop Items */}
                    <div className="hidden md:flex items-center space-x-2">

                        <Button size="lg" className=' bg-brand-accent hover:bg-brand-accent/90 text-primary-foreground rounded-full text-base'>
                            <Link href={HERO_CTA_LINK}>Reserve Now</Link>

                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>

                        <MobileMenu />
                    </div>
                </div>


            </nav>
        </header>
    )
}