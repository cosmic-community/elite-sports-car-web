// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Car object type
export interface Car extends CosmicObject {
  type: 'cars';
  metadata: {
    model_name: string;
    price: number;
    description?: string;
    specifications?: {
      horsepower?: string;
      zero_to_sixty?: string;
      top_speed?: string;
      engine?: string;
      drivetrain?: string;
      transmission?: string;
    };
    main_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    car_status?: {
      key: string;
      value: string;
    };
    featured?: boolean;
  };
}

// Team member object type
export interface TeamMember extends CosmicObject {
  type: 'team';
  metadata: {
    name: string;
    position?: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    phone?: string;
  };
}

// News article object type
export interface NewsArticle extends CosmicObject {
  type: 'news';
  metadata: {
    headline: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Car status type literals
export type CarStatus = 'available' | 'sold' | 'reserved';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}