import { NewsArticle } from '@/types'
import NewsCard from '@/components/NewsCard'

interface LatestNewsProps {
  articles: NewsArticle[]
}

export default function LatestNews({ articles }: LatestNewsProps) {
  if (!articles || articles.length === 0) {
    return (
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Latest News</h2>
        <p className="text-gray-400">No news articles available at this time.</p>
      </section>
    )
  }

  const displayArticles = articles.slice(0, 2)

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayArticles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  )
}