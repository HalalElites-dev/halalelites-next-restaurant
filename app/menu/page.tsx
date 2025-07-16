import React from 'react'
import { MENU_CATEGORIES } from '@/lib/constants'
import { Card, CardContent } from '@/components/ui/card';
import  Image  from 'next/image';
const page = () => {
  return (
    <section id='menu' className='py-30 px-6 bg-background '>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-20'>
          {/* heading */}
          <h1 className='py-5 lg:py-0 text-5xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight tracking-tight'>Our Menu</h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>Discover our authentic halal dishes crafted with traditional recipes and the finest ingredients</p>
        </div>
        {/* menu design */}

        {MENU_CATEGORIES.map((categoryData) => (
        <div key={categoryData.category} className="mb-16"> 
          <h2 className="text-4xl font-bold text-center mb-8 text-foreground" >
            {categoryData.category} 
          </h2>

          {/* This is your existing grid and card mapping, applied to items within THIS category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
            {categoryData.items.map((item, index) => (
              <Card
                key={index} // Use a more unique key if possible, like item.id if available
                className="bg-white shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden group border-0 p-0"
              >
                <div className="relative h-80">
                  <Image
                    src={item.Image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4"></div>
                </div>
                <CardContent className="p-8">
                  <h2 className="mb-4 leading-tight text-3xl font-bold text-foreground">{item.title}</h2>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed text-left">{item.description}</p>
                  {/* You might want to add price here, if your cards don't already */}
                  {/* <p className="text-2xl font-semibold text-primary">Price: $X.XX</p> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default page