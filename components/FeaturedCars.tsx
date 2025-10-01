import { Car } from '@/types'
import CarCard from '@/components/CarCard'

interface FeaturedCarsProps {
  cars: Car[]
}

export default function FeaturedCars({ cars }: FeaturedCarsProps) {
  if (!cars || cars.length === 0) {
    return (
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Vehicles</h2>
        <p className="text-gray-400">No featured vehicles available at this time.</p>
      </section>
    )
  }

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Vehicles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  )
}