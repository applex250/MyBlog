// src/config/site.ts
export const siteConfig = {
  title: "个人博客",
  description: "分享技术、设计和生活",
  author: "Wu",
  email: "wu_workspace@163.com",
  url: "https://wublog-48n.pages.dev/",
  social: {
    github: "https://github.com/applex250",
    twitter: "https://twitter.com",
    linkedin: "",
    email: "mailto:wu_workspace@163.com",
  },
  navigation: [
    { name: "文章", href: "/articles" },
    { name: "个人简介", href: "/", exact: true },
    { name: "开源项目", href: "/projects" },
    { name: "链接", href: "/links" },
  ],
  categories: [
    {
      name: "技术",
      slug: "tech",
      icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" class="hand-drawn">
        <path d="M12 8V4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 8V12H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28 12H42C43.1 12 44 12.9 44 14V22C44 23.1 43.1 24 42 24H34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28 20H36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      name: "设计",
      slug: "design",
      icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" class="hand-drawn">
        <path d="M12 28L16 32L40 10L32 2L10 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 28L10 34C8 38 6 44 4 46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      name: "生活",
      slug: "life",
      icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" class="hand-drawn">
        <path d="M12 28C12 38 20 46 24 46C28 46 36 38 36 28" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="24" cy="20" r="8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 34V28" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      name: "阅读",
      slug: "reading",
      icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" class="hand-drawn">
        <path d="M6 8H42C43.1 8 44 8.9 44 10V34C44 35.1 43.1 36 42 36H6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 8L24 20L42 8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 16L18 20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M30 16L34 20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      name: "项目",
      slug: "projects",
      icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" class="hand-drawn">
        <path d="M24 4L28 14L40 14L30 22L34 34L24 26L14 34L18 22L8 14L20 14L24 4Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18 22L14 38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M30 22L34 38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      name: "随笔",
      slug: "notes",
      icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" class="hand-drawn">
        <path d="M8 6H40C41.1 6 42 6.9 42 8V34C42 35.1 41.1 36 40 36H16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 6L24 18L8 6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 18V30" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 30H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 26H32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 26H32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
  ],
  tags: [
    { name: "React", color: "bg-blue-500" },
    { name: "Vue", color: "bg-green-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "CSS", color: "bg-purple-500" },
    { name: "Astro", color: "bg-orange-500" },
    { name: "Tailwind", color: "bg-cyan-500" },
    { name: "Node.js", color: "bg-green-600" },
    { name: "前端", color: "bg-pink-500" },
    { name: "性能优化", color: "bg-indigo-500" },
  ],
};
