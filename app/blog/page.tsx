import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { blogPosts } from '@/lib/constants'
import { Calendar, User, ArrowRight } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <section id="blog" className='py-30 px-6 bg-background'>
      <div className='max-w-7xl mx-auto'>

        <div className='text-center mb-20'>
          <Badge className="bg-[#FF7F47] text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide mb-6">
              Latest Posts
            </Badge>
          <h1 className='text-6xl md:text-7xl font-extrabold text-brand-primary mb-6 leading-tight tracking-tight'>Our Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stories, recipes, and insights from the heart of Middle Eastern cuisine
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-white shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden group border-0 p-0"
              >
                <div className="relative h-80">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#FF7F47] text-white px-3 py-1 rounded-full text-xs">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-[#2B1C08]/60 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#2B1C08] mb-4 leading-tight group-hover:text-[#FF7F47] transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-[#2B1C08]/70 mb-6 text-lg leading-relaxed">{post.excerpt}</p>

                  <Button
                    variant="default"
                    className="border-[#FF7F47] text-[#FF7F47] hover:bg-[#FF7F47] hover:text-white px-6 py-3 rounded-full font-medium tracking-wide bg-transparent group-hover:scale-105 transition-transform duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

      </div>
    </section>
  )
}

export default page