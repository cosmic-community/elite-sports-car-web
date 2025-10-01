import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-black/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Elite Sports Cars
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/inventory" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Inventory
            </Link>
            <Link 
              href="/team" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Team
            </Link>
            <Link 
              href="/news" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              News
            </Link>
          </nav>
          
          <Link
            href="/inventory"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors"
          >
            View Inventory
          </Link>
        </div>
      </div>
    </header>
  )
}