import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  { id: 1, name: 'Macdonald Sairos', text: 'MK Granites transformed our kitchen with their beautiful countertops. Highly recommended!', rating: 5 },
  { id: 2, name: 'Cama Mavenga', text: 'The team at MK Granites was professional and delivered exceptional quality. Our memorial went well!', rating: 5 },
  { id: 3, name: 'Rejo Moyo', text: 'Loved the service and the quality of our reception desk. Thank you so much MK Granites!', rating: 4 },
]

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-primary text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
