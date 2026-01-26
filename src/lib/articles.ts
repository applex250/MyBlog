// src/lib/articles.ts
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: Date;
  category: string;
  tags: string[];
  readingTime: number;
  image?: string;
  content: any; // 修复为 any 类型，因为 content 是 AstroComponentFactory
}

export interface Tag {
  name: string;
  count: number;
}

// 获取所有文章
export async function getAllArticles(): Promise<Article[]> {
  const articles = await getCollection("articles");
  return articles.map((article) => ({
    id: article.id,
    slug: article.slug,
    title: article.data.title,
    description: article.data.description,
    date: article.data.date,
    category: article.data.category,
    tags: article.data.tags,
    readingTime: article.data.readingTime,
    image: article.data.image,
    content: article.render(), // 保留 render 方法供使用
  }));
}

// 根据 slug 获取文章
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getAllArticles();
  return articles.find((article) => article.slug === slug) || null;
}

// 根据分类获取文章
export async function getArticlesByCategory(
  category: string,
): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.filter((article) => article.category === category);
}

// 根据标签获取文章
export async function getArticlesByTag(tag: string): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.filter((article) => article.tags.includes(tag));
}

// 获取最新文章
export async function getRecentArticles(count: number = 5): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, count);
}

// 获取所有分类
export async function getCategories(): Promise<
  { name: string; count: number }[]
> {
  const articles = await getAllArticles();
  const categoryMap = new Map<string, number>();

  articles.forEach((article) => {
    const count = categoryMap.get(article.category) || 0;
    categoryMap.set(article.category, count + 1);
  });

  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    count,
  }));
}

// 获取所有标签
export async function getTags(): Promise<Tag[]> {
  const articles = await getAllArticles();
  const tagMap = new Map<string, number>();

  articles.forEach((article) => {
    article.tags.forEach((tag) => {
      const count = tagMap.get(tag) || 0;
      tagMap.set(tag, count + 1);
    });
  });

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
