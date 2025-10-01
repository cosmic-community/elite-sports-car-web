export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Elite Sports Cars</h3>
            <p className="text-gray-400">
              Your premier destination for luxury sports cars
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/inventory" className="hover:text-white transition-colors">
                  Inventory
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-white transition-colors">
                  Latest News
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@elitesportscars.com</li>
              <li>Hours: Mon-Sat 9AM-6PM</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elite Sports Car Dealership. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}