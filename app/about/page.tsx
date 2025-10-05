import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Elite Sports Car Dealership',
  description: 'Learn about Elite Sports Car Dealership - your premier destination for luxury sports cars.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About Elite Sports Cars
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Elite Sports Car Dealership was founded with a singular passion: to connect discerning automotive 
              enthusiasts with the world's most exceptional sports cars. For over two decades, we've been the 
              premier destination for luxury and exotic vehicles, specializing in iconic brands like Porsche, 
              Ferrari, Lamborghini, and other prestigious marques.
            </p>
            <p className="text-gray-300 mb-4">
              Our commitment to excellence extends beyond just selling cars. We curate each vehicle in our 
              collection with meticulous attention to detail, ensuring that every sports car meets our exacting 
              standards for performance, condition, and provenance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-3">Curated Selection</h3>
                <p className="text-gray-300">
                  Every vehicle in our inventory is hand-selected and thoroughly inspected to ensure it meets 
                  the highest standards of quality and performance.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-gray-300">
                  Our team of automotive specialists brings decades of combined experience in luxury sports 
                  cars, providing unparalleled expertise and service.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-3">White-Glove Service</h3>
                <p className="text-gray-300">
                  From your first inquiry to long after your purchase, we provide personalized attention and 
                  support to ensure your complete satisfaction.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-3">Transparent Process</h3>
                <p className="text-gray-300">
                  We believe in complete transparency, providing detailed vehicle histories, comprehensive 
                  inspections, and honest communication throughout your journey.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              Our mission is simple: to deliver an exceptional automotive experience that exceeds expectations 
              at every turn. We're not just selling cars; we're helping you acquire automotive masterpieces 
              that represent engineering excellence, timeless design, and pure driving passion.
            </p>
            <p className="text-gray-300 mb-4">
              Whether you're a seasoned collector or purchasing your first exotic sports car, we're committed 
              to making your experience memorable, enjoyable, and completely hassle-free.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Visit Our Showroom</h2>
            <p className="text-gray-300 mb-4">
              We invite you to visit our state-of-the-art showroom to experience our collection firsthand. 
              Our facility features a carefully curated selection of the world's finest sports cars in a 
              luxurious, welcoming environment.
            </p>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Hours of Operation</h3>
              <p className="text-gray-300">
                Monday - Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: By Appointment Only
              </p>
              <p className="text-gray-300 mt-4">
                <strong>Contact:</strong><br />
                Phone: (555) 123-4567<br />
                Email: info@elitesportscars.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}