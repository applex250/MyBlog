# 🚀 部署检查清单

## 部署前准备

### 必须完成的任务
- [ ] 测试所有页面都能正常访问
- [ ] 检查所有链接是否有效
- [ ] 确认图片资源都已优化
- [ ] 验证移动端响应式布局

### 可选但建议的任务
- [ ] 配置Giscus评论系统
- [ ] 自定义域名准备
- [ ] 创建favicon和og-image
- [ ] 设置Google Analytics（可选）

## 📦 部署到Vercel

### 前置条件
- [ ] GitHub账号
- [ ] 代码已推送到GitHub仓库

### 部署步骤

1. **创建Vercel账号**
   - 访问 https://vercel.com
   - 使用GitHub账号登录

2. **导入项目**
   - 点击"Add New Project"
   - 选择您的GitHub仓库
   - 点击"Import"

3. **配置构建设置**
   ```
   Framework Preset: Astro
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **环境变量**（如需要）
   - 无需额外环境变量
   - 如需自定义，可在项目设置中添加

5. **部署**
   - 点击"Deploy"
   - 等待2-3分钟

6. **访问**
   - Vercel会提供一个 `.vercel.app` 域名
   - 访问确认部署成功

### 验证部署
- [ ] 访问首页正常显示
- [ ] 文章列表页正常
- [ ] 文章详情页正常
- [ ] 项目页正常
- [ ] 链接页正常
- [ ] 搜索功能工作
- [ ] 移动端显示正常
- [ ] SEO标签正确

## 🌐 配置自定义域名

### 前置条件
- [ ] 已购买域名
- [ ] DNS解析权限

### 配置步骤

1. **在Vercel添加域名**
   - 进入项目设置
   - 点击"Domains"
   - 添加您的域名

2. **配置DNS记录**
   - Vercel会显示需要的DNS记录
   - 在域名提供商处添加：
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     TTL: 600
     ```

3. **验证DNS**
   - 等待DNS传播（10分钟-24小时）
   - Vercel会自动验证
   - 验证完成后启用HTTPS

4. **测试访问**
   - [ ] 通过自定义域名访问
   - [ ] HTTPS证书有效
   - [ ] 所有页面正常

## 💬 配置Giscus评论系统

### 前置条件
- [ ] GitHub账号
- [ ] 公开的GitHub仓库

### 配置步骤

1. **安装Giscus应用**
   - 访问 https://github.com/apps/giscus
   - 点击"Install"
   - 选择仓库
   - 点击"Install"

2. **获取配置参数**
   在配置页面填写：
   - Repository: `your-username/your-repo`
   - Page ↔️ Discussions mapping: `pathname`
   - Discussion category: `Announcements`

3. **复制参数**
   记录以下参数：
   - `data-repo`: 仓库名称
   - `data-repo-id`: 仓库ID
   - `data-category-id`: 分类ID

4. **更新代码**
   编辑 `src/config/giscus.ts`:
   ```typescript
   export const giscusConfig = {
     repo: 'your-username/your-repo',
     repoId: 'R_kgDOG...',
     category: 'Announcements',
     categoryId: 'DIC_kwDOG...',
     mapping: 'pathname',
     strict: '0',
     reactionsEnabled: '1',
     emitMetadata: '0',
     inputPosition: 'bottom',
     theme: 'light',
     lang: 'zh-CN',
   };
   ```

5. **重新部署**
   - 提交代码
   - 推送到GitHub
   - Vercel自动部署

6. **测试评论**
   - [ ] 访问任意文章页
   - [ ] 评论组件正常显示
   - [ ] 可以发布评论
   - [ ] 评论保存到GitHub Discussions

## 📊 性能优化检查

### Lighthouse测试
运行Lighthouse测试，确保：
- [ ] Performance: 95+
- [ ] Accessibility: 100
- [ ] Best Practices: 100
- [ ] SEO: 100

### 性能指标
使用PageSpeed Insights测试：
- [ ] First Contentful Paint (FCP) < 1.8s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Time to Interactive (TTI) < 3.8s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] First Input Delay (FID) < 100ms

## 🔒 安全检查

### HTTPS
- [ ] 强制HTTPS已启用
- [ ] SSL证书有效
- [ ] HTTP自动重定向到HTTPS

### 内容安全
- [ ] 无敏感信息泄露
- [ ] 环境变量正确配置
- [ ] API密钥已移除

## 📱 移动端检查

### 测试设备
在以下设备测试：
- [ ] iPhone SE (375x667)
- [ ] iPhone 12 Pro (390x844)
- [ ] iPad (768x1024)
- [ ] Android手机 (360x640)

### 测试项目
- [ ] 导航栏正常显示
- [ ] 文章内容可读
- [ ] 链接可点击
- [ ] 图片正确缩放
- [ ] 搜索功能正常

## 🔍 SEO检查

### 元数据
使用工具检查每个页面：
- [ ] Title标签正确
- [ ] Meta描述存在
- [ ] Open Graph标签完整
- [ ] Twitter Cards标签完整
- [ ] Canonical URL正确

### Sitemap
- [ ] sitemap-index.xml可访问
- [ ] 包含所有页面
- [ ] 提交到Google Search Console

### Robots.txt
- [ ] robots.txt正确配置
- [ ] 允许搜索引擎爬取
- [ ] 正确设置Disallow

## 📝 内容检查

### 文章
- [ ] 所有示例文章显示正常
- [ ] Markdown渲染正确
- [ ] 代码高亮正常
- [ ] 图片加载正常

### 项目
- [ ] 项目卡片显示正常
- [ ] 链接正确
- [ ] 筛选功能正常

### 链接
- [ ] 所有链接卡片显示
- [ ] 外部链接正确打开
- [ ] 图标正常显示

## 🔄 持续监控

### 设置监控
- [ ] Vercel Analytics已启用
- [ ] Google Analytics已配置（可选）
- [ ] Uptime监控已设置（可选）

### 错误日志
- [ ] 定期检查Vercel日志
- [ ] 监控404错误
- [ ] 监控服务器错误

## 📧 邮件通知（可选）

### 配置Vercel通知
- [ ] 部署成功通知
- [ ] 部署失败通知
- [ ] 错误报告

## ✅ 最终检查清单

部署完成后，确认以下所有项目：

### 功能测试
- [ ] 所有页面可访问
- [ ] 所有链接有效
- [ ] 搜索功能正常
- [ ] 评论功能正常
- [ ] 响应式设计正常

### 性能测试
- [ ] 页面加载速度 < 2s
- [ ] Lighthouse分数 > 90
- [ ] 图片已优化
- [ ] CSS/JS已压缩

### SEO测试
- [ ] Meta标签完整
- [ ] Sitemap已生成
- [ ] Robots.txt正确
- [ ] 社交媒体卡片正确

### 安全测试
- [ ] HTTPS已启用
- [ ] 无安全漏洞
- [ ] 依赖已更新
- [ ] 环境变量安全

### 用户体验
- [ ] 移动端体验良好
- [ ] 加载状态友好
- [ ] 错误提示清晰
- [ ] 导航清晰明了

## 🎉 部署完成！

恭喜！您的Astro个人博客已成功部署！

### 下一步建议
1. 开始写作，发布您的第一篇原创文章
2. 在社交媒体上分享您的博客
3. 定期更新内容，保持活跃
4. 根据用户反馈持续优化
5. 考虑添加更多功能（如RSS、订阅等）

### 维护建议
- 定期更新依赖包
- 监控网站性能
- 备份重要内容
- 回复读者评论
- 分析访问数据

祝您博客运营顺利！ 🚀
