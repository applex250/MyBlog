// src/lib/links.ts
export interface Link {
  id: string;
  title: string;
  description: string;
  url: string;
  icon?: string;
}

export async function getAllLinks(): Promise<Link[]> {
  // 示例链接数据
  const links: Link[] = [
    {
      id: 'github',
      title: 'GitHub',
      description: '我的GitHub',
      url: 'https://github.com/applex250',
    },
    {
      id: 'twitter',
      title: 'Twitter',
      description: '@username',
      url: 'https://twitter.com',
    },
    {
      id: 'email',
      title: 'Email',
      description: '我的邮箱',
      url: 'mailto:wu_workspace@163.com',
    },
    {
      id: 'blog',
      title: 'Blog',
      description: '我的博客网站',
      url: 'https://wublog-48n.pages.dev/',
    },
    {
      id: 'resume',
      title: 'Resume',
      description: '下载简历',
      url: '#',
    },
    {
      id: 'about',
      title: 'About',
      description: '了解更多',
      url: '/about',
    },
  ];

  return links;
}
