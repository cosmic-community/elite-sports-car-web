import { createBucketClient } from '@cosmicjs/sdk'
import { Car, TeamMember, NewsArticle, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  apiEnvironment: 'staging'
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all cars
export async function getCars(): Promise<Car[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'cars' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Car[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch cars');
  }
}

// Fetch single car by slug
export async function getCar(slug: string): Promise<Car | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'cars',
      slug
    }).depth(1);
    
    const car = response.object as Car;
    
    if (!car || !car.metadata) {
      return null;
    }
    
    return car;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch car');
  }
}

// Fetch featured cars
export async function getFeaturedCars(): Promise<Car[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'cars',
        'metadata.featured': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Car[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured cars');
  }
}

// Fetch team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as TeamMember[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch team members');
  }
}

// Fetch news articles
export async function getNewsArticles(): Promise<NewsArticle[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'news' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as NewsArticle[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch news articles');
  }
}

// Fetch single news article by slug
export async function getNewsArticle(slug: string): Promise<NewsArticle | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'news',
      slug
    }).depth(1);
    
    const article = response.object as NewsArticle;
    
    if (!article || !article.metadata) {
      return null;
    }
    
    return article;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch news article');
  }
}