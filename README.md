# 个人博客 - Astro 静态博客

一个基于 Astro 构建的现代化个人博客，支持 Markdown 文章、评论系统和全文搜索。

## ✨ 特性

- 🚀 **极速加载** - Astro 零 JavaScript by default
- 📝 **Markdown 文章** - 简单易用的内容管理
- 💬 **Giscus 评论** - 基于 GitHub Discussions 的评论系统
- 🔍 **Pagefind 搜索** - 纯静态全文搜索，支持中文
- 🎨 **优雅设计** - 保留极简主义设计风格
- 📱 **响应式布局** - 完美适配各种设备
- 🎯 **SEO 优化** - 自动生成 sitemap
- 🌙 **主题切换** - 支持明暗主题

## 📦 技术栈

- **框架**: Astro 5
- **样式**: Tailwind CSS 4
- **语言**: TypeScript
- **评论**: Giscus (GitHub Discussions)
- **搜索**: Pagefind
- **部署**: Vercel / Cloudflare Pages

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:4321 查看效果

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 📁 项目结构

```
my-astro-blog/
├── public/                    # 静态资源
├── src/
│   ├── components/            # 组件
│   │   ├── layout/          # 布局组件
│   │   ├── article/         # 文章组件
│   │   ├── project/         # 项目组件
│   │   ├── link/            # 链接组件
│   │   ├── ui/              # UI组件
│   │   └── comment/         # 评论组件
│   ├── layouts/              # 页面布局
│   ├── pages/               # 页面路由
│   │   ├── articles/        # 文章页面
│   │   ├── category/        # 分类页面
│   │   ├── index.astro      # 首页
│   │   ├── projects.astro   # 项目页
│   │   └── links.astro      # 链接页
│   ├── styles/              # 全局样式
│   ├── lib/                 # 工具函数
│   └── config/              # 配置文件
├── content/                 # Markdown 文章
│   └── articles/            # 文章目录
├── astro.config.mjs         # Astro 配置
├── tailwind.config.mjs      # Tailwind 配置
└── package.json
```

## 📝 添加新文章

1. 在 `content/articles/` 目录下创建新的 Markdown 文件

```markdown
---
title: 你的文章标题
description: 文章描述
date: 2024-01-26
category: 技术
tags:
  - React
  - TypeScript
readingTime: 5
---

# 文章标题

这里是文章内容...
```

2. 文章会自动出现在文章列表中

## 💬 配置评论系统

1. 访问 [Giscus 配置页面](https://github.com/apps/giscus)
2. 选择你的 GitHub 仓库并安装 Giscus 应用
3. 获取 `repoId` 和 `categoryId`
4. 更新 `src/config/giscus.ts` 文件

## 🔍 搜索功能

搜索功能基于 Pagefind，构建时自动生成搜索索引：

```bash
npm run build
```

Pagefind 会自动索引所有 Markdown 文件和生成的 HTML 页面。

## 🌐 部署

### Vercel 部署

1. 推送代码到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 配置构建命令：`npm run build`
4. 配置输出目录：`dist`

### Cloudflare Pages 部署

1. 推送代码到 GitHub
2. 在 [Cloudflare Pages](https://pages.cloudflare.com) 创建新项目
3. 配置构建命令：`npm run build`
4. 配置输出目录：`dist`

## ⚙️ 配置

### 站点配置

编辑 `src/config/site.ts`：

```typescript
export const siteConfig = {
  title: '个人博客',
  description: '分享技术、设计和生活',
  author: 'Wu',
  email: 'hello@example.com',
  url: 'https://yourdomain.com',
  // ...
};
```

### 自定义域名

1. 更新 `astro.config.mjs` 中的 `site` 配置
2. 在部署平台添加自定义域名
3. 配置 DNS 记录

## 🎨 自定义样式

- 全局样式：`src/styles/global.css`
- Tailwind 配置：`tailwind.config.mjs`
- 组件样式：在各个组件的 `<style>` 标签中

## 📊 性能

- LCP (Largest Contentful Paint): < 1.2s
- TTI (Time to Interactive): < 1.5s
- CLS (Cumulative Layout Shift): < 0.1

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可

MIT License

## 🙏 致谢

- [Astro](https://astro.build) - 极速的 Web 框架
- [Tailwind CSS](https://tailwindcss.com) - 实用优先的 CSS 框架
- [Giscus](https://giscus.app) - 评论系统
- [Pagefind](https://pagefind.app) - 静态搜索库
- 设计灵感来自 [Fried Rice](https://svtter.cn)
