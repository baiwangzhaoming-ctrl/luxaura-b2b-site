# LuxAura Smart Lighting - B2B Website

This is a high-performance B2B independent website for **LuxAura Smart Lighting**, built with Next.js 14, Tailwind CSS, and next-intl.

## 🚀 Key Features
- **Modern UI**: Minimalist design inspired by high-end architectural lighting brands.
- **B2B Inquiry System**: Integrated project quote request flow.
- **Multi-language Support**: Native SEO-friendly routing for English (`/en`) and Chinese (`/zh`).
- **Media Optimization**: Integrated with Cloudflare R2 for fast asset delivery.

## 🛠 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **i18n**: next-intl
- **Storage**: Cloudflare R2
- **Deployment**: Vercel

## 📦 Getting Started

### 1. Local Development
```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 2. GitHub Deployment
1. Create a new repository on GitHub.
2. Push the code:
```bash
git init
git add .
git commit -m "Initial commit: LuxAura B2B Site"
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

### 3. Vercel & Environment Variables
Connect your GitHub repo to Vercel and add the following Environment Variables for R2 integration:
- `R2_ENDPOINT`: Your Cloudflare R2 Endpoint URL.
- `R2_ACCESS_KEY_ID`: Cloudflare R2 Access Key.
- `R2_SECRET_ACCESS_KEY`: Cloudflare R2 Secret Key.
- `NEXT_PUBLIC_R2_PUBLIC_URL`: Your Public CDN URL (e.g., `https://cdn.yourdomain.com`).

## 📁 Project Structure
- `src/app/[locale]`: Core routing and localized pages.
- `src/components`: Reusable UI components (Header, Hero, ProductCard).
- `src/messages`: Translation files (JSON).
- `src/lib`: Utility functions (S3/R2 client).
