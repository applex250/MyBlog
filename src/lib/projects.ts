// src/lib/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  stars: number;
  language: string;
  license: string;
  lastUpdated: string;
  category: string;
  languageColor?: string;
}

export async function getAllProjects(): Promise<Project[]> {
  // 示例项目数据，后续可以从JSON文件或API获取
  const projects: Project[] = [
    {
      id: '1',
      title: 'awesome-toolkit',
      description: '一个强大的工具集，包含常用的开发工具和实用函数，帮助开发者提高工作效率。',
      url: 'https://github.com/username/project1',
      stars: 1200,
      language: 'JavaScript',
      license: 'MIT License',
      lastUpdated: '3 天前',
      category: 'tools',
      languageColor: '#f1e05a',
    },
    {
      id: '2',
      title: 'react-components',
      description: '一套精美的React组件库，遵循设计系统，开箱即用，支持主题定制。',
      url: 'https://github.com/username/project2',
      stars: 856,
      language: 'TypeScript',
      license: 'Apache 2.0',
      lastUpdated: '1 周前',
      category: 'tools',
      languageColor: '#3178c6',
    },
    {
      id: '3',
      title: 'api-gateway',
      description: '轻量级的API网关，支持负载均衡、缓存、限流等功能，易于扩展。',
      url: 'https://github.com/username/project3',
      stars: 432,
      language: 'TypeScript',
      license: 'MIT License',
      lastUpdated: '2 周前',
      category: 'tools',
      languageColor: '#3572A5',
    },
    {
      id: '4',
      title: 'data-visualizer',
      description: '数据可视化库，支持多种图表类型，基于D3.js构建，性能优异。',
      url: 'https://github.com/username/project4',
      stars: 267,
      language: 'TypeScript',
      license: 'MIT License',
      lastUpdated: '1 个月前',
      category: 'tools',
      languageColor: '#4B8BBE',
    },
    {
      id: '5',
      title: 'cli-tools',
      description: '命令行工具集合，包含文件处理、文本编辑、网络请求等常用功能。',
      url: 'https://github.com/username/project5',
      stars: 189,
      language: 'Python',
      license: 'MIT License',
      lastUpdated: '2 个月前',
      category: 'tools',
      languageColor: '#00d4aa',
    },
    {
      id: '6',
      title: 'blog-template',
      description: '简洁优雅的博客模板，基于Next.js和Tailwind CSS，支持Markdown和代码高亮。',
      url: 'https://github.com/username/project6',
      stars: 124,
      language: 'JavaScript',
      license: 'MIT License',
      lastUpdated: '3 个月前',
      category: 'web',
      languageColor: '#f1e05a',
    },
    {
      id: '7',
      title: 'clawdbot-watchdog',
      description: 'Clawdbot Gateway 监控守护进程 - 自动监控 Gateway 状态，检测到掉线时自动刷新 Clash 订阅并重启服务。支持 WhatsApp 实时通知、交互式命令、失败保护等功能。',
      url: 'https://github.com/applex250/clawdbot-watchdog',
      stars: 0,
      language: 'JavaScript',
      license: 'MIT License',
      lastUpdated: '刚刚',
      category: 'tools',
      languageColor: '#f1e05a',
    },
  ];

  return projects;
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
  const projects = await getAllProjects();
  if (category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === category);
}

export async function getProjectById(id: string): Promise<Project | null> {
  const projects = await getAllProjects();
  return projects.find(project => project.id === id) || null;
}
