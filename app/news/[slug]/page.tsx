// app/news/[slug]/page.tsx
import { getNewsArticle, getNewsArticles } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import NewsDetail from '@/components/NewsDetail'

export const revalidate = 60

export async function generateStaticParams() {
  const articles = await getNewsArticles()
  
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await getNewsArticle(slug)

  if (!article) {
    notFound()
  }

  return <NewsDetail article={article} />
}