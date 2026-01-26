# 快速开始指南

## 🎉 恭喜！您的Astro博客项目已经成功搭建完成！

## 🚀 立即开始

### 1. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:4321 查看您的博客！

### 2. 查看示例页面

- 首页: http://localhost:4321/
- 文章列表: http://localhost:4321/articles
- 示例文章: http://localhost:4321/articles/react-18-concurrent
- 项目页: http://localhost:4321/projects
- 链接页: http://localhost:4321/links

## 📝 添加您自己的文章

### 步骤1：创建Markdown文件

在 `src/content/articles/` 目录下创建新的Markdown文件，例如 `my-first-article.md`：

```markdown
---
title: 我的第一篇文章
description: 这是我使用Astro博客发布的第一篇文章
date: 2024-01-26T00:00:00.000Z
category: 技术
tags:
  - Astro
  - 博客
readingTime: 5
---

# 我的第一篇文章

这里是文章内容...

## 第二部分

继续写文章内容...

```javascript
const hello = "World";
console.log(hello);
```

### 结论

完成文章！
```

### 步骤2：重新构建

```bash
npm run build
```

### 步骤3：预览新文章

```bash
npm run preview
```

访问 http://localhost:4321/articles/my-first-article 查看新文章。

## 💬 配置评论系统（Giscus）

### 步骤1：安装Giscus应用

1. 访问 https://github.com/apps/giscus
2. 点击"Install"按钮
3. 选择您的GitHub仓库（或创建一个新仓库）

### 步骤2：配置Giscus

在配置页面填写以下信息：

- **Repository**: `your-username/your-repo`
- **Page ↔️ Discussions mapping**: `pathname`（推荐）
- **Discussion category**: `Announcements`（或创建新分类）

### 步骤3：获取配置参数

配置完成后，您会看到一段嵌入代码，复制以下参数：
- `data-repo`: 仓库名称（例如：`username/my-blog`）
- `data-repo-id`: 仓库ID（例如：`R_kgDOG...`）
- `data-category-id`: 分类ID（例如：`DIC_kwDOG...`）

### 步骤4：更新配置文件

打开 `src/config/giscus.ts`，更新配置：

```typescript
export const giscusConfig = {
  repo: 'your-username/your-repo', // 替换为您的仓库
  repoId: 'R_kgDOG...', // 替换为实际的repoId
  category: 'Announcements',
  categoryId: 'DIC_kwDOG...', // 替换为实际的categoryId
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  theme: 'light',
  lang: 'zh-CN',
};
```

### 步骤5：重新构建并测试

```bash
npm run build
npm run preview
```

现在访问任意文章页面，您应该能看到Giscus评论组件了！

## 🔍 使用搜索功能

搜索功能已自动配置完成！

1. 访问文章列表页: http://localhost:4321/articles
2. 在搜索框中输入关键词
3. 查看实时搜索结果

搜索功能会在构建时自动索引所有Markdown文章。

## 🌐 部署到Vercel

### 步骤1：推送到GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

### 步骤2：在Vercel部署

1. 访问 https://vercel.com/new
2. 导入您的GitHub仓库
3. 配置构建设置：
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. 点击"Deploy"

### 步骤3：访问您的博客

部署完成后，Vercel会提供一个 `.vercel.app` 域名。

### 步骤4：配置自定义域名（可选）

1. 在Vercel项目设置中添加自定义域名
2. 按照提示配置DNS记录

## 📱 测试响应式设计

打开浏览器的开发者工具（F12），测试不同屏幕尺寸：

- 桌面：1920x1080
- 平板：1024x768
- 手机：375x667（iPhone SE）

所有页面都应该完美适配！

## 🎨 自定义设计

### 修改颜色

编辑 `src/styles/global.css`，更新CSS变量：

```css
:root {
  --black: #0a0a0a;        /* 主色调 */
  --white: #fafafa;        /* 背景色 */
  --accent: #00d4aa;       /* 强调色 */
  /* 其他颜色... */
}
```

### 修改字体

编辑 `src/styles/global.css`，更新字体变量：

```css
body {
  font-family: 'Your Font', serif;
}
```

### 修改站点信息

编辑 `src/config/site.ts`：

```typescript
export const siteConfig = {
  title: '您的博客标题',
  description: '您的博客描述',
  author: '您的名字',
  email: 'your@email.com',
  url: 'https://yourdomain.com',
  // ...
};
```

## 📊 查看性能

### Lighthouse测试

1. 在Chrome中打开您的博客
2. 按F12打开开发者工具
3. 切换到"Lighthouse"标签
4. 选择"Performance"和"SEO"
5. 点击"Analyze page load"

您应该看到：
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🔧 常用命令

```bash
# 开发
npm run dev              # 启动开发服务器

# 构建
npm run build            # 构建生产版本

# 预览
npm run preview          # 预览构建结果

# 搜索索引
npx pagefind --site dist # 手动生成搜索索引
```

## 📚 更多资源

- [Astro文档](https://docs.astro.build)
- [Tailwind CSS文档](https://tailwindcss.com/docs)
- [Giscus文档](https://giscus.app)
- [Pagefind文档](https://pagefind.app)
- [Vercel文档](https://vercel.com/docs)

## ❓ 遇到问题？

### 构建失败

```bash
# 清除缓存
rm -rf node_modules dist .astro
npm install
npm run build
```

### Giscus不显示

1. 检查`src/config/giscus.ts`中的配置是否正确
2. 确保GitHub仓库的Discussions功能已启用
3. 检查浏览器控制台是否有错误

### 搜索功能不工作

1. 确保`dist/pagefind/`目录存在
2. 检查浏览器控制台是否有错误
3. 重新构建项目

## 🎉 开始写作吧！

现在您拥有了一个：
- ✅ 极速的静态博客
- ✅ 支持Markdown文章
- ✅ 集成评论系统
- ✅ 支持全文搜索
- ✅ 优雅的设计
- ✅ 完美的SEO

开始创作您的内容吧！ 🚀
