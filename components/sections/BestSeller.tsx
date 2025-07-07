import { Best_Selling, Best_Selling_subtext, BESTSELLING } from '@/lib/constants'
import React from 'react'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

const BestSelling = () => {
    return (
        <section className='py-24 px-6 bg-background'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-20'>
                    <Badge className="bg-brand-accent text-background px-6 py-3 rounded-full text-sm font-medium tracking-wide mb-6">
                        Best Sellers
                    </Badge>
                    <h1 className='text-3xl md:text-6xl font-bold text-foreground mb-4 leading-tight tracking-tight'>{Best_Selling}</h1>
                    <p className='text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
                        {Best_Selling_subtext}
                    </p>

                    {/* best selling Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10'>
                        {BESTSELLING.map((bestseller, index) => (
                            <Card
                                key={index}
                                className='bg-white shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden group border-0 p-0'
                            >
                                {/* Render content for each bestseller here, e.g.: */}
                                <div className='relative h-80'>
                                    <Image src={bestseller.Image} alt={bestseller.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 right-4"></div>

                                </div>
                                <CardContent className="p-8">
                                    <h2 className="mb-4 leading-tight text-3xl font-bold text-foreground">{bestseller.title}</h2>
                                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed text-left">{bestseller.description}</p>
                                </CardContent>
                            </Card>

                        ))}
                    </div>

                </div>

                <div className='flex justify-center'>
                    <Button
                        variant="default"
                        className="bg-brand-primary text-brand-secondary px-8 py-4 rounded-full text-lg font-medium tracking-wide ">
                        <Link href="/menu">View Menu</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default BestSelling