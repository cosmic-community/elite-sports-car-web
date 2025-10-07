import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us - Elite Sports Car Dealership',
  description: 'Get in touch with our team of luxury sports car specialists.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-400 mb-8">
          Have a question about our vehicles or want to schedule a test drive? 
          Fill out the form below and our team will get back to you shortly.
        </p>

        <div className="bg-gray-900 rounded-lg p-8 mb-12 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <ContactForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Visit Our Showroom</h3>
            <p className="text-gray-400">
              123 Luxury Lane<br />
              Beverly Hills, CA 90210
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400">
              Phone: (555) 123-4567<br />
              Email: info@elitesportscars.com<br />
              Hours: Mon-Sat 9AM-6PM
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}