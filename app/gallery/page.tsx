import { Badge } from '@/components/ui/badge'
import { galleryImages } from '@/lib/constants'
import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <section id='gallery' className='py-30 px-6 bg-background'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-20'>
                    <h1 className='py-5 lg:py-0 text-5xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight tracking-tight'>Gallery</h1>
                    <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>Explore our delicious dishes and warm restaurant atmosphere through our photo gallery</p>
                </div>

                {/* gallery grid */}
                 <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-2">
            {galleryImages.map((image, index) => {
              // Define different heights for masonry effect
              const heights = [
                "h-64",
                "h-80",
                "h-96",
                "h-72",
                "h-88",
                "h-60",
                "h-84",
                "h-76",
                "h-92",
                "h-68",
                "h-56",
                "h-100",
              ]
              const randomHeight = heights[index % heights.length]

              return (
                <div
                  key={index}
                  className={`relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer break-inside-avoid mb-2 ${randomHeight}`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-bold text-lg mb-1">{image.alt}</h3>
                    <Badge className="bg-[#FF7F47] text-white px-2 py-1 rounded-full text-xs">{image.category}</Badge>
                  </div>
                </div>
              )
            })}
          </div>
            </div>
        </section>
    )
}

export default page