import { siteConfig } from "@/config/site";
import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_SLUGS_QUERY } from "@/sanity/lib/queries";

export default async function sitemap() {
  const blogRoutes = await sanityFetch({
    query: POSTS_SLUGS_QUERY,
    params: {},
    revalidate: false,
  });

  const blogPosts = blogRoutes.map((route) => ({
    url: `${siteConfig.url}/blog/${route}`,
    lastModified: new Date().toISOString(),
  }));
  const routes = ["/", "/contact", "/apply", "/blog"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...blogPosts];
}
