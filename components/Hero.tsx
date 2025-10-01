import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://imgix.cosmicjs.com/4a0547f0-9ed8-11f0-8dcc-651091f6a7c0-photo-1503376780353-7e6692767b70-1759331223917.jpg?w=1920&h=1200&fit=crop&auto=format,compress)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Drive Your
            <span className="text-primary"> Dream</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover the finest collection of luxury sports cars from the world's most prestigious manufacturers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/inventory"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Inventory
            </Link>
            <Link
              href="/team"
              className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}