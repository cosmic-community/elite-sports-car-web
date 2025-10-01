# Elite Sports Car Dealership

![App Preview](https://imgix.cosmicjs.com/4a0547f0-9ed8-11f0-8dcc-651091f6a7c0-photo-1503376780353-7e6692767b70-1759331223917.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive web application for showcasing luxury sports cars with dynamic content management powered by Cosmic CMS.

## Features

- 🏎️ Dynamic vehicle showcase with detailed specifications
- 📸 Interactive image galleries with optimized loading
- 👥 Team member profiles with contact information
- 📰 Latest dealership news and special offers
- 📱 Fully responsive design for all devices
- ⚡ Performance optimized with imgix image processing
- 🎨 Modern dark theme with elegant animations
- 🔍 Easy navigation and intuitive user interface

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68dd43388d0995fa5541db28&clone_repository=68dd44628d0995fa5541db3e)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a website for a sports car dealership"

### Code Generation Prompt

> Based on the content model I created for "Create a website for a sports car dealership", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Imgix** - Image optimization and delivery

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:

```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

### Fetching Vehicles

```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({ type: 'cars' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const cars = response.objects
```

### Fetching Team Members

```typescript
const response = await cosmic.objects
  .find({ type: 'team' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const team = response.objects
```

### Fetching News Articles

```typescript
const response = await cosmic.objects
  .find({ type: 'news' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const news = response.objects
```

## Cosmic CMS Integration

This application uses Cosmic as a headless CMS with the following content types:

- **Cars** - Vehicle listings with specifications, pricing, images, and status
- **Team** - Sales consultant profiles with photos and contact details
- **News** - Dealership announcements and special offers

All content can be managed through your Cosmic dashboard at [https://app.cosmicjs.com](https://app.cosmicjs.com).

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the deploy button above
2. Connect your GitHub repository
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Environment Variables

Make sure to set these environment variables in your deployment platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key

<!-- README_END -->