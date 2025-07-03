import React from 'react'
import { HERO_SUBTEXT, HERO_CTA_TEXT, HERO_CTA_LINK } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from "next/link"

const Hero = () => {
    return (
        <section id='home' className='relative h-screen flex items-center justify-start'>
            {/* background hero */}
            <div className='absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url("/hero-image.png")]' ><div className="absolute inset-0 bg-black/40"></div></div>

            {/* Hero Text */}
            <div className="relative z-10 ml-8 md:ml-16 lg:ml-32">
                <h1 className="text-6xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.9] tracking-tight font-bold">
                    Experience Authentic
                    <br />
                    <span className="text-brand-accent">Halal Cuisine</span>
                </h1>
                <p className="text-xl mb-12 max-w-2xl text-primary-foreground/90">
                    {HERO_SUBTEXT}
                </p>
                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-6">
                    <Button className="bg-brand-accent hover:bg-brand-accent/90 px-10 py-4 rounded-full text-lg font-medium tracking-wide">
                        <Link href={HERO_CTA_LINK}>{HERO_CTA_TEXT}</Link>

                    </Button>
                    <Button variant="outline" className=" px-10 py-4 rounded-full text-lg font-medium tracking-wide">
                        <Link href="/menu">View Menu</Link>

                    </Button>

                </div>
            </div>

        </section>
    )
}

export default Hero