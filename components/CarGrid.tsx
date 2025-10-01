import { Car } from '@/types'
import CarCard from '@/components/CarCard'

interface CarGridProps {
  cars: Car[]
}

export default function CarGrid({ cars }: CarGridProps) {
  if (!cars || cars.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No vehicles available at this time.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  )
}