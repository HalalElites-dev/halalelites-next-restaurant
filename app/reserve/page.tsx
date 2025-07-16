import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {  Calendar, Clock, Phone, Users } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <section id='reserve' className='py-30 px-6 bg-background'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='py-5 lg:py-0 text-5xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight tracking-tight'>Reservation</h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>Book your table and experience authentic hospitality</p>
        </div>
       
        <div >
          <div className="max-w-4xl mx-auto">

            <Card className="bg-white shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-12">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-lg font-semibold text-brand-primary mb-3">
                        <Calendar className="w-5 h-5 inline mr-2" />
                        Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-4 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-semibold text-brand-primary mb-3">
                        <Clock className="w-5 h-5 inline mr-2" />
                        Time
                      </label>
                      <select className="w-full px-4 py-4 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg">
                        <option>5:00 PM</option>
                        <option>5:30 PM</option>
                        <option>6:00 PM</option>
                        <option>6:30 PM</option>
                        <option>7:00 PM</option>
                        <option>7:30 PM</option>
                        <option>8:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-lg font-semibold text-brand-primary mb-3">
                        <Users className="w-5 h-5 inline mr-2" />
                        Party Size
                      </label>
                      <select className="w-full px-4 py-4 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg">
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4 People</option>
                        <option>5 People</option>
                        <option>6+ People</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-lg font-semibold text-brand-primary mb-3">
                        <Phone className="w-5 h-5 inline mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-4 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-lg font-semibold text-[#2B1C08] mb-3">First Name</label>
                      <input
                        type="text"
                        placeholder="Ahmad"
                        className="w-full px-4 py-4 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-semibold text-brand-primary mb-3">Last Name</label>
                      <input
                        type="text"
                        placeholder="Saeed"
                        className="w-full px-4 py-4 border border--brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-brand-primary mb-3">Special Requests</label>
                    <textarea
                      rows={4}
                      placeholder="Any special dietary requirements, celebrations, or seating preferences..."
                      className="w-full px-4 py-4 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg resize-none"
                    ></textarea>
                  </div>

                  <div className="text-center pt-8">
                    <Button className="bg-brand-accent/89 hover:bg-brand-accent text-brand-secondary px-12 py-6 rounded-full text-lg font-semibold shadow-xl tracking-wide">
                      Confirm Reservation
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-brand-primary mb-6">Need Help?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                For large parties or special events, please call us directly
              </p>
              <Button
                variant="default"
                className="border-brand-primary  bg-brand-primary text-brand-secondary px-8 py-4 rounded-full text-lg font-medium tracking-wide "
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (770) 833-9267
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page