import { getNewsArticles } from '@/lib/cosmic'
import NewsGrid from '@/components/NewsGrid'

export const revalidate = 60

export default async function NewsPage() {
  const articles = await getNewsArticles()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h1>
        <p className="text-gray-400 text-lg">
          Stay updated with our latest offers and arrivals
        </p>
      </div>
      
      <NewsGrid articles={articles} />
    </div>
  )
}