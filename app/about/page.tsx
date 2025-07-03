import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Award, Star } from 'lucide-react'
const page = () => {
    return (
        <section className='py-30 px-6 bg-background'>
            <div className='max-w-7xl mx-auto'>

                <div className='text-center mb-20'>
                    <h1 className='text-6xl md:text-7xl font-extrabold text-brand-primary mb-6 leading-tight tracking-tight'>Our Story</h1>
                </div>
                <div className="space-y-32">
                    <div className="relative">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="sticky top-32">
                                    <div className="bg-brand-primary p-2 rounded-3xl shadow-2xl">
                                        <Image
                                            src="/twoSpoons-frontEntrance.png"
                                            alt="Two Spoons Restaurant on opening day"
                                            width={500}
                                            height={400}
                                            className="rounded-2xl w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 space-y-8">
                                <div className="inline-block bg-brand-accent text-white px-6 py-3 rounded-full text-lg font-bold">
                                    2020 - The Beginning
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">A Dream Takes Shape</h3>
                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        In the heart of Toledo, a vision was born. Our founders, passionate about authentic halal cuisine,
                                        dreamed of creating a space where tradition meets innovation, where every dish tells a story of
                                        heritage and craftsmanship.
                                    </p>
                                    <p>
                                        The opening day was magical - balloons adorned our entrance, the aroma of freshly prepared spices
                                        filled the air, and our first customers became part of our extended family. That day marked not
                                        just the opening of a restaurant, but the beginning of a culinary journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="inline-block bg-brand-primary text-white px-6 py-3 rounded-full text-lg font-bold">
                                    Our Mission
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
                                    Bringing People Together
                                </h3>
                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        From day one, our mission was simple yet profound: to serve delicious, certified halal food that
                                        brings people together. We believed that food is more than sustenance - it&apos;s a bridge between
                                        cultures, a celebration of diversity, and a way to create lasting memories.
                                    </p>
                                    <p>
                                        Every recipe we craft, every ingredient we source, and every dish we serve is infused with this
                                        philosophy. We&apos;re not just feeding bodies; we&apos;re nourishing souls and building community, one meal
                                        at a time.
                                    </p>
                                </div>
                            </div>
                            <div className="sticky top-32">
                                <div className="bg-brand-primary p-2 rounded-3xl shadow-2xl">
                                    <Image
                                        src="/restaurant-interior.png"
                                        alt="Restaurant interior showing community dining"
                                        width={600}
                                        height={400}
                                        className="rounded-2xl w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="sticky top-32">
                                    <div className="bg-brand-accent p-2 rounded-3xl shadow-2xl">
                                        <Image
                                            src="/kitchen.png"
                                            alt="Our professional kitchen where magic happens"
                                            width={600}
                                            height={400}
                                            className="rounded-2xl w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 space-y-8">
                                <div className="inline-block bg-brand-accent text-brand-secondary px-6 py-3 rounded-full text-lg font-bold">
                                    The Craft
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">Where Magic Happens</h3>
                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        Behind every exceptional meal is a kitchen where passion meets precision. Our state-of-the-art
                                        facility is more than just equipment and ingredients - it&apos;s where our chefs pour their hearts into
                                        every dish, honoring time-tested techniques while embracing culinary innovation.
                                    </p>
                                    <p>
                                        Here, traditional spice blends are carefully measured, meats are prepared according to the
                                        strictest halal standards, and each plate is crafted with the attention to detail that has made us
                                        Toledo&apos;s premier halal dining destination.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-20">
                                <Badge className="bg-brand-accent text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide mb-6">
                                    Recognition
                                </Badge>
                                <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-8 leading-tight tracking-tight">
                                    Recognition & Awards
                                </h2>
                                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                                    We&apos;re honored to be recognized for our commitment to excellence in halal cuisine and outstanding service
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="relative">
                                    <Image
                                        src="/awards.png"
                                        alt="Awards and recognition received by Two Spoons Halal Restaurant"
                                        width={600}
                                        height={400}
                                        className="rounded-2xl shadow-2xl"
                                    />
                                </div>

                                <div className="space-y-8">
                                    <Card className="bg-white border-0 p-8">
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-brand-accent p-3 rounded-full">
                                                <Award className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-brand-primary mb-2">Best Halal Restaurant 2023</h3>
                                                <p className="text-muted-foreground text-lg">Toledo Food Critics Association</p>
                                                <p className="text-muted-foreground text-sm mt-2">
                                                    Recognized for exceptional authentic halal cuisine and outstanding customer experience
                                                </p>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="bg-white border-0 p-8">
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-brand-accent p-3 rounded-full">
                                                <Star className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-brand-primary mb-2">Outstanding Service 2022</h3>
                                                <p className="text-muted-foreground text-lg">Ohio Restaurant Association</p>
                                                <p className="text-muted-foreground text-sm mt-2">
                                                    Honored for exceptional hospitality and commitment to customer satisfaction
                                                </p>
                                            </div>
                                        </div>
                                    </Card>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page