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
  const projects: Project[] = [
    {
      id: 'clawdbot-watchdog',
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
