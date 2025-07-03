import React from 'react'
import { TESTIMONIALS } from '@/lib/constants'
import { Badge } from '../ui/badge'
import { Card } from '../ui/card'
import { Star } from 'lucide-react'
const Testimonials = () => {
    return (
        <section id='testimonials' className='py-24 px-6 bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-20'>
                    <Badge className='bg-brand-accent text-brand-secondary px-6 py-3 rounded-full text-sm font-medium tracking-wide mb-6'>
                        Testimonials
                    </Badge>
                    <h2 className='text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight'>
                        What Our Guests Say
                    </h2>
                    <p className='text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
                        Don&apos;t just take our word for it - hear from our valued customers about their dining experience and why they keep coming back
                    </p>
                </div>

                <div className='grid md:grid-cols-3 gap-10'>
                    {TESTIMONIALS.map((testimonial, index) => (
                        <Card key={index} className='bg-secondary p-10 shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between h-full'>
                            <div className='flex mb-6'>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className='w-6 h-6 fill-brand-accent text-brand-accent' />
                                ))}
                            </div>
                            <p className='text-foreground mb-8 text-lg leading-relaxed italic'>
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <div>
                                <div className='font-bold text-foreground text-xl mb-1'>{testimonial.author}</div>
                                <div className='text-muted-foreground text-sm'>{testimonial.role}</div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials