import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const HeroHeader = () => {
  return (
    <div className="relative bg-cover bg-center h-full flex items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)', backgroundSize: 'contain', backgroundPosition: 'center', height: '80vh' }}> {/* Increased height */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 z-10 text-white">
        <h1 className="text-5xl text-center md:text-5xl font-bold mb-4">Welcome to MK Granites</h1>
        <p className="text-xl md:text-2xl text-center mb-8">Discover the beauty and durability of our granite and marble products</p>


        <div className="text-center">
          <Link to="/all-products" className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-colors duration-300 inline-flex items-center">
            Explore Our Products <ArrowRight className="ml-2" />
          </Link>
        </div>

      </div>
    </div>
  )
}

export default HeroHeader
