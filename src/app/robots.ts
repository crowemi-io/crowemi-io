import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/ui/', '/health/'],
        },
        sitemap: 'https://io.crowemi.com/sitemap.xml',
    }
}