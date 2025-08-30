🚀 道明课件平台 - 快速部署说明

📁 部署文件清单：
✅ index.html - 主页面
✅ styles.css - 样式文件
✅ script.js - 功能脚本
✅ sitemap.xml - 搜索引擎地图
✅ robots.txt - 爬虫规则
✅ _redirects - 路由重定向
✅ netlify.toml - Netlify配置
✅ 部署指南.md - 详细部署教程

🎯 最简单的部署方法（推荐）：

1. 注册 Netlify 账号
   访问：https://netlify.com
   点击 Sign up 注册

2. 部署网站
   - 登录后点击 "Add new site"
   - 选择 "Deploy manually"
   - 将整个文件夹拖拽到页面中
   - 等待部署完成

3. 配置域名 daoming.cloud
   - 进入 Site settings → Domain management
   - 点击 Add custom domain
   - 输入：daoming.cloud
   - 按照提示配置DNS

📋 DNS配置（在域名管理处设置）：
A记录：@ → 75.2.60.5
CNAME记录：www → daoming.cloud

⏰ 等待时间：
- 部署：1-2分钟
- DNS生效：24小时内
- HTTPS证书：DNS生效后自动启用

✅ 部署成功标志：
- 可以通过 daoming.cloud 访问
- 显示绿色锁图标（HTTPS）
- 多语言切换正常
- 课件可以正常播放

❓ 遇到问题？
查看详细教程：部署指南.md

🎉 预期效果：
你的网站将在 https://daoming.cloud 上线
支持全球访问，自动HTTPS，快速加载！