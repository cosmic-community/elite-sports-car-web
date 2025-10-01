import { getCars } from '@/lib/cosmic'
import CarGrid from '@/components/CarGrid'

export const revalidate = 60

export default async function InventoryPage() {
  const cars = await getCars()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Inventory</h1>
        <p className="text-gray-400 text-lg">
          Explore our collection of luxury sports cars
        </p>
      </div>
      
      <CarGrid cars={cars} />
    </div>
  )
}