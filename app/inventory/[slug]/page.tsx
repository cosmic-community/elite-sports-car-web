// app/inventory/[slug]/page.tsx
import { getCar, getCars } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import CarDetail from '@/components/CarDetail'

export const revalidate = 60

export async function generateStaticParams() {
  const cars = await getCars()
  
  return cars.map((car) => ({
    slug: car.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CarPage({ params }: PageProps) {
  const { slug } = await params
  const car = await getCar(slug)

  if (!car) {
    notFound()
  }

  return <CarDetail car={car} />
}