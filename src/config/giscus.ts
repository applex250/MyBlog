// src/config/giscus.ts
export const giscusConfig = {
  repo: 'your-username/your-repo', // 替换为你的GitHub仓库
  repoId: 'R_kgDOG...', // 从 https://github.com/apps/giscus 获取
  category: 'Announcements',
  categoryId: 'DIC_kwDOG...', // 从 https://github.com/apps/giscus 获取
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  theme: 'light',
  lang: 'zh-CN',
};

// 配置说明：
// 1. 访问 https://github.com/apps/giscus
// 2. 选择你的仓库并安装 Giscus 应用
// 3. 填写必要信息：
//    - Repository: your-username/your-repo
//    - Page ↔️ Discussions mapping: pathname（推荐）
//    - Discussion category: Announcements
// 4. 复制生成的 repoId 和 categoryId 到上面
// 5. 主题支持：light, dark, dark_dimmed, dark_high_contrast, transparent_dark
