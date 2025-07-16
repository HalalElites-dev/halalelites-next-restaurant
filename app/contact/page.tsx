import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <section id='contact' className='py-30 px-6 bg-background'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-20'>
                    <h1 className='py-5 lg:py-0 text-5xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight tracking-tight'>Contact Us</h1>
                    <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>Get in touch with us for reservations, catering, or any questions about our restaurant</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                    {/* Contact Form */}
                    <div>
                        <div className='mb-12'>
                            <Badge className="bg-brand-accent text-brand-secondary px-6 py-3 rounded-full text-sm font-medium tracking-wide mb-6">
                                Get In Touch
                            </Badge>
                            <h1 className='text-4xl md:text-5xl font-bold leading-tight text-brand-primary'>Send Us a Message</h1>
                            <p className='text-base text-muted-foreground leading-relaxed'>We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible</p>
                        </div>

                        <Card className="bg-white shadow-2xl border-0">
                            <CardContent className="p-10">
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-lg font-semibold text-brand-primary mb-3">First Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-4 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg font-semibold text-brand-primary mb-3">Last Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-4 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-lg font-semibold text-brand-primary mb-3">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-4 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-lg font-semibold text-brand-primary mb-3">Subject</label>
                                        <select className="w-full px-4 py-4 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg">
                                            <option>General Inquiry</option>
                                            <option>Reservation</option>
                                            <option>Catering</option>
                                            <option>Feedback</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-lg font-semibold text-brand-primary mb-3">Message</label>
                                        <textarea
                                            rows={6}
                                            className="w-full px-4 py-4 border border-text-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7F47] text-lg resize-none"
                                        ></textarea>
                                    </div>

                                    <Button className="w-full bg-brand-accent/90 hover:bg-brand-accent text-white py-4 rounded-xl text-lg font-semibold shadow-xl tracking-wide">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="space-y-8">
                        <div className="mb-12">
                            <Badge className="bg-brand-accent text-brand-secondary px-6 py-3 rounded-full text-sm font-medium tracking-wide mb-6">
                                Visit Us
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-8 leading-tight tracking-tight">
                                Restaurant Information
                            </h2>
                        </div>

                        <Card className="bg-white shadow-xl border-0 p-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-brand-accent p-4 rounded-full">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-primary mb-3">Address</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        123 Main Street
                                        <br />
                                        Toledo, OH 43606
                                        <br />
                                        United States
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-xl border-0 p-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-brand-accent p-4 rounded-full">
                                    <Phone className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-primary mb-3">Phone</h3>
                                    <p className="text-lg text-muted-foreground">
                                        <a href="tel:770-833-9267" className="hover:text-brand-accent transition-colors">
                                            (770) 833-9267
                                        </a>
                                    </p>
                                    <p className="text-muted-foreground text-sm mt-1">Available during business hours</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-xl border-0 p-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-brand-accent p-4 rounded-full">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-primary mb-3">Email</h3>
                                    <p className="text-lg text-muted-foreground">
                                        <a href="mailto:info@TwoSpoonsHalal.com" className="hover:text-brand-accent transition-colors">
                                            info@TwoSpoonsHalal.com
                                        </a>
                                    </p>
                                    <p className="text-muted-foreground text-sm mt-1">We&apos;ll respond within 24 hours</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-white shadow-xl border-0 p-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-brand-accent p-4 rounded-full">
                                    <Clock className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-primary mb-4">Business Hours</h3>
                                    <div className="space-y-2 text-muted-foreground">
                                        <div className="flex justify-between">
                                            <span>Monday - Thursday</span>
                                            <span className="font-medium">11:00 AM - 9:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Friday - Saturday</span>
                                            <span className="font-medium">11:00 AM - 10:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday</span>
                                            <span className="font-medium">12:00 PM - 9:00 PM</span>
                                        </div>
                                        <div className="text-brand-accent text-sm mt-3 font-medium">
                                            *Closed 3:00-5:00 PM Fridays for Jummah prayers
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default page