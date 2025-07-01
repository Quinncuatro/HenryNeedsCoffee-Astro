import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortByDate } from '../utils/collectionUtils.js';

export async function GET(context) {
  // Get all published blog posts
  const blogPosts = await getCollection('blog', ({ data }) => {
    return !data.draft;
  });
  
  // Sort posts by date (newest first)
  const sortedPosts = sortByDate(blogPosts);
  
  return rss({
    title: 'Henry Needs Coffee - Terminal Blog',
    description: 'A developer\'s journey through code, coffee, and terminal adventures. Technical articles, tutorials, and musings from a terminal-loving developer.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.desc,
      link: `/blog/${post.slug}/`,
      guid: `/blog/${post.slug}/`,
      categories: post.data.category ? [post.data.category] : [],
      // Include post content - Astro RSS will handle HTML generation from markdown
      content: post.body,
    })),
    customData: `<language>en-us</language>
    <managingEditor>henry@henryneeds.coffee (Henry Quinn)</managingEditor>
    <webMaster>henry@henryneeds.coffee (Henry Quinn)</webMaster>
    <generator>Astro ${process.env.npm_package_version || 'v5.8.2'} + @astrojs/rss</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <ttl>60</ttl>`,
  });
}