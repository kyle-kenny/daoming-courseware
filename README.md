# 教学课件网站

一个现代化的教学课件展示和管理平台，支持课件分类、在线预览和响应式设计。

## 功能特点

- 📚 **课件分类管理** - 支持按学科分类展示课件
- 🖥️ **在线预览** - 通过iframe嵌入课件，支持全屏查看
- 📱 **响应式设计** - 适配桌面、平板和手机设备
- 🎨 **现代化界面** - 美观的卡片式布局和流畅的动画效果
- 🔍 **搜索功能** - 支持按标题和描述搜索课件
- ⚡ **快速加载** - 优化的性能和用户体验

## 文件结构

```
课件网站/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript逻辑
└── README.md           # 说明文档
```

## 使用方法

1. **打开网站**：直接在浏览器中打开 `index.html` 文件
2. **浏览课件**：点击导航栏中的分类查看不同学科的课件
3. **查看课件**：点击课件卡片即可在弹窗中查看完整内容
4. **关闭课件**：点击右上角的 × 按钮或按 ESC 键关闭课件查看器

## 添加新课件

在 `script.js` 文件中的 `coursewareData` 数组中添加新的课件对象：

```javascript
const newCourseware = {
    id: 2,  // 唯一ID
    title: "课件标题",
    description: "课件描述",
    category: "geography",  // 分类：geography, science, history, math
    embedUrl: "https://your-courseware-url.com",  // 课件嵌入链接
    icon: "🌍"  // 显示图标
};
```

或者使用提供的API：

```javascript
// 添加新课件
CoursewareManager.addCourseware({
    title: "新课件标题",
    description: "课件描述",
    category: "science",
    embedUrl: "https://example.com/embed",
    icon: "🔬"
});
```

## 支持的课件格式

- Gamma课件 (gamma.app)
- Google Slides
- PowerPoint Online
- Prezi
- 任何支持iframe嵌入的在线课件平台

## 分类说明

- `geography` - 地理
- `science` - 科学
- `history` - 历史
- `math` - 数学

可以在 `categoryMap` 对象中添加新的分类。

## 自定义样式

在 `styles.css` 文件中可以自定义：

- 颜色主题
- 字体样式
- 布局间距
- 动画效果

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 部署说明

### 本地使用
直接在浏览器中打开 `index.html` 文件即可。

### 在线部署
1. 将所有文件上传到Web服务器
2. 确保服务器支持静态文件托管
3. 访问域名即可使用

### GitHub Pages部署
1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为源

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, 动画)
- 原生JavaScript (ES6+)
- 响应式设计

## 许可证

本项目采用 MIT 许可证。

## 更新日志

### v1.0.0 (2024-01-15)
- 初始版本发布
- 基础课件展示功能
- 分类筛选功能
- 响应式设计
- 课件查看器