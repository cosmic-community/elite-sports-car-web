import { getFeaturedCars, getNewsArticles } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import FeaturedCars from '@/components/FeaturedCars'
import LatestNews from '@/components/LatestNews'

export const revalidate = 60

export default async function Home() {
  const [featuredCars, newsArticles] = await Promise.all([
    getFeaturedCars(),
    getNewsArticles()
  ])

  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <FeaturedCars cars={featuredCars} />
      <LatestNews articles={newsArticles} />
    </div>
  )
}