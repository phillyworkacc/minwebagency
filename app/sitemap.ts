import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
   return [
      {
         url: "https://minwebagency.com",
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 1,
      },
      {
         url: "https://minwebagency.com/about",
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 0.8,
      },
      {
         url: "https://minwebagency.com/book-call",
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 0.7,
      },
      {
         url: "https://minwebagency.com/pricing",
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 0.6,
      }
   ];
}