import React from 'react'
import { ABOUT, ABOUT_HEADING, ABOUT_SUBTEXT } from '@/lib/constants'
import Image from 'next/image'
const About = () => {
  return (
    <section id='about' className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-4 eading-tight tracking-tight">{ABOUT_HEADING}</h2>
          <p className="text-xl  text-muted-foreground max-w-4xl mx-auto leading-relaxed  ">
            {ABOUT_SUBTEXT}
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16 items-start mb-20'>
          <div className='relative'>
            <Image
              className='rounded-lg'
              alt='interior.png'
              src={'/restaurant-interior.png'}
              width={600}
              height={500}
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-accent text-brand-secondary p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
          <div className='space-y-12'>
            <div>
              <h3 className='text-3xl font-bold text-brand-primary mb-6 leading-tight'>Where Tradition Meets Innovation</h3>
              <p className='text-lg text-brand-primary/90 leading-relaxed'>
                Two Spoons was born from a simple dream: to bring the authentic flavors of the Middle East to Toledo,
                while honoring the rich culinary traditions passed down through generations. Our founder, Chef Ahmad,
                immigrated from Damascus with nothing but family recipes and an unwavering passion for halal cuisine.
              </p>
              <p className="text-lg text-brand-primary/90 leading-relaxed">
                Today, we continue to serve dishes that tell stories of heritage, family, and the beautiful diversity
                of Middle Eastern culture, all while maintaining the highest standards of halal certification.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 ">
          {ABOUT.map((item, idx) => (
            <div className="text-center" key={idx}>
              <div className="text-4xl font-bold text-brand-accent mb-2">{item.title}</div>
              <div className="text-muted-foreground text-sm">{item.description}</div>
            </div>
          ))}
        </div>
          </div>
           
        </div>
        
       
      </div>
    </section>
  )
}

export default About


