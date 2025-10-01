import { NewsArticle } from '@/types'
import NewsCard from '@/components/NewsCard'

interface NewsGridProps {
  articles: NewsArticle[]
}

export default function NewsGrid({ articles }: NewsGridProps) {
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No news articles available at this time.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  )
}