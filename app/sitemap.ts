import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ilmistree.com',
      lastModified: new Date(),
    },
    {
      url: 'https://ilmistree.com/book/9th-class-mathematics',
      lastModified: new Date(),
    },
    {
      url: 'https://ilmistree.com/book/9th-class-biology',
      lastModified: new Date(),
    },
    {
      url: 'https://ilmistree.com/book/9th-class-urdu-qawaid-e-insha',
      lastModified: new Date(),
    },
    {
      url: 'https://ilmistree.com/book/9th-class-english-grammar',
      lastModified: new Date(),
    },
    {
      url: 'https://ilmistree.com/book/9th-class-physics',
      lastModified: new Date(),
    },
    {
      url: 'https://ilmistree.com/book/9th-class-computer-science',
      lastModified: new Date(),
    },
    {
      url: 'https://ilmistree.com/book/9th-class-islamiat',
      lastModified: new Date(),
    },
    {
      url: 'https://ilmistree.com/book/9th-class-turjuma-tul-quran',
      lastModified: new Date(),
    },
  ]
}