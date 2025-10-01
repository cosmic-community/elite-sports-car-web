import { Car } from '@/types'
import Link from 'next/link'

interface CarDetailProps {
  car: Car
}

export default function CarDetail({ car }: CarDetailProps) {
  const specs = car.metadata?.specifications
  const gallery = car.metadata?.gallery || []
  const mainImage = car.metadata?.main_image
  const price = car.metadata?.price
  const status = car.metadata?.car_status?.value

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/inventory" className="text-primary hover:underline mb-6 inline-block">
        ← Back to Inventory
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          {mainImage && (
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
              <img
                src={`${mainImage.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
                alt={car.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {gallery.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {gallery.map((image, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={`${image.imgix_url}?w=600&h=450&fit=crop&auto=format,compress`}
                    alt={`${car.title} - Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">{car.title}</h1>
            {price && (
              <p className="text-3xl font-bold text-primary mb-4">
                ${price.toLocaleString()}
              </p>
            )}
            {status && (
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                status === 'Available' ? 'bg-green-600' : 
                status === 'Reserved' ? 'bg-yellow-600' : 
                'bg-gray-600'
              }`}>
                {status}
              </span>
            )}
          </div>

          {car.metadata?.description && (
            <div 
              className="prose prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: car.metadata.description }}
            />
          )}

          {specs && (
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {specs.horsepower && (
                  <div>
                    <p className="text-gray-400 text-sm">Horsepower</p>
                    <p className="font-semibold">{specs.horsepower}</p>
                  </div>
                )}
                {specs.zero_to_sixty && (
                  <div>
                    <p className="text-gray-400 text-sm">0-60 mph</p>
                    <p className="font-semibold">{specs.zero_to_sixty}</p>
                  </div>
                )}
                {specs.top_speed && (
                  <div>
                    <p className="text-gray-400 text-sm">Top Speed</p>
                    <p className="font-semibold">{specs.top_speed}</p>
                  </div>
                )}
                {specs.engine && (
                  <div>
                    <p className="text-gray-400 text-sm">Engine</p>
                    <p className="font-semibold">{specs.engine}</p>
                  </div>
                )}
                {specs.drivetrain && (
                  <div>
                    <p className="text-gray-400 text-sm">Drivetrain</p>
                    <p className="font-semibold">{specs.drivetrain}</p>
                  </div>
                )}
                {specs.transmission && (
                  <div>
                    <p className="text-gray-400 text-sm">Transmission</p>
                    <p className="font-semibold">{specs.transmission}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}