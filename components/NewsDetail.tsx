import { NewsArticle } from '@/types'
import Link from 'next/link'

interface NewsDetailProps {
  article: NewsArticle
}

export default function NewsDetail({ article }: NewsDetailProps) {
  const imageUrl = article.metadata?.featured_image?.imgix_url

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/news" className="text-primary hover:underline mb-6 inline-block">
        ← Back to News
      </Link>

      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {article.metadata?.headline || article.title}
        </h1>

        {imageUrl && (
          <div className="aspect-[16/9] rounded-lg overflow-hidden mb-8">
            <img
              src={`${imageUrl}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {article.metadata?.content && (
          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.metadata.content }}
          />
        )}
      </article>
    </div>
  )
}