import Link from 'next/link'
import { NewsArticle } from '@/types'

interface NewsCardProps {
  article: NewsArticle
}

export default function NewsCard({ article }: NewsCardProps) {
  const imageUrl = article.metadata?.featured_image?.imgix_url

  return (
    <Link href={`/news/${article.slug}`} className="group">
      <article className="bg-gray-900 rounded-lg overflow-hidden transition-transform group-hover:scale-105">
        {imageUrl && (
          <div className="aspect-[16/9] relative overflow-hidden">
            <img
              src={`${imageUrl}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {article.metadata?.headline || article.title}
          </h3>
        </div>
      </article>
    </Link>
  )
}