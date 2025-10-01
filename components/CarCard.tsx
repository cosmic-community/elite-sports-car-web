import Link from 'next/link'
import { Car } from '@/types'

interface CarCardProps {
  car: Car
}

export default function CarCard({ car }: CarCardProps) {
  const imageUrl = car.metadata?.main_image?.imgix_url
  const price = car.metadata?.price
  const status = car.metadata?.car_status?.value

  return (
    <Link href={`/inventory/${car.slug}`} className="group">
      <div className="bg-gray-900 rounded-lg overflow-hidden transition-transform group-hover:scale-105">
        {imageUrl && (
          <div className="aspect-[16/9] relative overflow-hidden">
            <img
              src={`${imageUrl}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={car.title}
              className="w-full h-full object-cover"
            />
            {status && (
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                status === 'Available' ? 'bg-green-600' : 
                status === 'Reserved' ? 'bg-yellow-600' : 
                'bg-gray-600'
              }`}>
                {status}
              </div>
            )}
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {car.title}
          </h3>
          {price && (
            <p className="text-2xl font-bold text-primary">
              ${price.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}