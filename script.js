// 多语言翻译数据
const translations = {
    zh: {
        site: {
            title: "教学课件平台"
        },
        nav: {
            all: "全部课件",
            geography: "地理",
            science: "科学",
            history: "历史",
            math: "数学"
        },
        section: {
            title: "课件展示"
        },
        viewer: {
            title: "课件标题"
        },
        footer: {
            copyright: "© 2024 教学课件平台. 所有权利保留."
        },
        courseware: {
            loadError: "课件加载失败，请稍后重试",
            loading: "正在加载课件..."
        }
    },
    en: {
        site: {
            title: "Educational Courseware Platform"
        },
        nav: {
            all: "All Courses",
            geography: "Geography",
            science: "Science",
            history: "History",
            math: "Mathematics"
        },
        section: {
            title: "Course Display"
        },
        viewer: {
            title: "Course Title"
        },
        footer: {
            copyright: "© 2024 Educational Courseware Platform. All rights reserved."
        },
        courseware: {
            loadError: "Failed to load courseware, please try again later",
            loading: "Loading courseware..."
        }
    },
    es: {
        site: {
            title: "Plataforma de Material Educativo"
        },
        nav: {
            all: "Todos los Cursos",
            geography: "Geografía",
            science: "Ciencia",
            history: "Historia",
            math: "Matemáticas"
        },
        section: {
            title: "Exhibición de Cursos"
        },
        viewer: {
            title: "Título del Curso"
        },
        footer: {
            copyright: "© 2024 Plataforma de Material Educativo. Todos los derechos reservados."
        },
        courseware: {
            loadError: "Error al cargar el material, inténtelo más tarde",
            loading: "Cargando material..."
        }
    },
    fr: {
        site: {
            title: "Plateforme de Supports Pédagogiques"
        },
        nav: {
            all: "Tous les Cours",
            geography: "Géographie",
            science: "Science",
            history: "Histoire",
            math: "Mathématiques"
        },
        section: {
            title: "Affichage des Cours"
        },
        viewer: {
            title: "Titre du Cours"
        },
        footer: {
            copyright: "© 2024 Plateforme de Supports Pédagogiques. Tous droits réservés."
        },
        courseware: {
            loadError: "Échec du chargement du support, veuillez réessayer plus tard",
            loading: "Chargement du support..."
        }
    }
};

// 课件数据（支持多语言）
const coursewareData = [
    {
        id: 1,
        title: {
            zh: "如何找到北方？地球的秘密与指南针",
            en: "How to Find North? Earth's Secrets and Compass",
            es: "¿Cómo encontrar el norte? Los secretos de la Tierra y la brújula",
            fr: "Comment trouver le nord ? Les secrets de la Terre et la boussole"
        },
        description: {
            zh: "探索地球磁场的奥秘，学习如何使用指南针确定方向，了解地理导航的基本原理。",
            en: "Explore the mysteries of Earth's magnetic field, learn how to use a compass to determine direction, and understand the basic principles of geographical navigation.",
            es: "Explora los misterios del campo magnético de la Tierra, aprende a usar una brújula para determinar la dirección y comprende los principios básicos de la navegación geográfica.",
            fr: "Explorez les mystères du champ magnétique terrestre, apprenez à utiliser une boussole pour déterminer la direction et comprenez les principes de base de la navigation géographique."
        },
        category: "geography",
        embedUrl: "https://gamma.app/embed/eyuabc15ln6xdq3",
        icon: "🧭"
    },
    {
        id: 2,
        title: {
            zh: "第十四课：弱电与强电",
            en: "Lesson 14: Low Voltage vs High Voltage",
            es: "Lección 14: Bajo voltaje vs Alto voltaje",
            fr: "Leçon 14 : Basse tension vs Haute tension"
        },
        description: {
            zh: "学习弱电与强电的区别，了解电路基础知识，掌握电气安全常识。",
            en: "Learn the difference between low and high voltage, understand basic circuit knowledge, and master electrical safety knowledge.",
            es: "Aprende la diferencia entre bajo y alto voltaje, comprende el conocimiento básico de circuitos y domina el conocimiento de seguridad eléctrica.",
            fr: "Apprenez la différence entre basse et haute tension, comprenez les connaissances de base des circuits et maîtrisez les connaissances de sécurité électrique."
        },
        category: "science",
        embedUrl: "https://gamma.app/embed/i3djfdmtc07sc1n",
        icon: "⚡"
    }
    // 可以在这里添加更多课件
];

// 当前语言
let currentLanguage = 'zh';

// 分类映射（动态获取）
function getCategoryMap() {
    return translations[currentLanguage].nav;
}

// 多语言系统
class I18n {
    static init() {
        // 从localStorage获取保存的语言设置
        const savedLanguage = localStorage.getItem('courseware-language') || 'zh';
        this.setLanguage(savedLanguage);
        
        // 绑定语言切换事件
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.value = savedLanguage;
            languageSelect.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        }
    }
    
    static setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('courseware-language', lang);
        
        // 更新页面语言
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
        
        // 更新所有翻译文本
        this.updateTranslations();
        
        // 重新渲染课件（因为课件标题和描述也需要更新）
        renderCourseware(currentCategory);
    }
    
    static updateTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        });
    }
    
    static getTranslation(key) {
        const keys = key.split('.');
        let value = translations[currentLanguage];
        
        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return null;
            }
        }
        
        return value;
    }
    
    static t(key) {
        return this.getTranslation(key) || key;
    }
}

// DOM 元素
const coursewareGrid = document.getElementById('courseware-grid');
const viewerSection = document.getElementById('viewer-section');
const viewerTitle = document.getElementById('viewer-title');
const coursewareFrame = document.getElementById('courseware-frame');
const closeViewer = document.getElementById('close-viewer');
const navLinks = document.querySelectorAll('.nav-link');

// 当前选中的分类
let currentCategory = 'all';

// 初始化页面
function init() {
    I18n.init();
    renderCourseware();
    bindEvents();
}

// 渲染课件卡片
function renderCourseware(category = 'all') {
    const filteredData = category === 'all' 
        ? coursewareData 
        : coursewareData.filter(item => item.category === category);
    
    if (filteredData.length === 0) {
        coursewareGrid.innerHTML = `
            <div class="loading">
                暂无${getCategoryMap()[category]}课件
            </div>
        `;
        return;
    }
    
    coursewareGrid.innerHTML = filteredData.map(courseware => {
        // 获取当前语言的标题和描述
        const title = typeof courseware.title === 'object' 
            ? courseware.title[currentLanguage] || courseware.title.zh
            : courseware.title;
        const description = typeof courseware.description === 'object'
            ? courseware.description[currentLanguage] || courseware.description.zh
            : courseware.description;
        
        return `
            <div class="courseware-card" data-id="${courseware.id}">
                <div class="card-header">
                    <div class="card-icon">${courseware.icon}</div>
                    <h3 class="card-title">${title}</h3>
                </div>
                <p class="card-description">${description}</p>
                <span class="card-category">${getCategoryMap()[courseware.category]}</span>
            </div>
        `;
    }).join('');
    
    // 为新生成的卡片绑定点击事件
    bindCardEvents();
}

// 绑定卡片点击事件
function bindCardEvents() {
    const cards = document.querySelectorAll('.courseware-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const coursewareId = parseInt(card.dataset.id);
            openCourseware(coursewareId);
        });
    });
}

// 打开课件查看器
function openCourseware(id) {
    const courseware = coursewareData.find(item => item.id === id);
    if (!courseware) return;
    
    // 获取当前语言的标题
    const title = typeof courseware.title === 'object' 
        ? courseware.title[currentLanguage] || courseware.title.zh
        : courseware.title;
    
    viewerTitle.textContent = title;
    
    // 创建iframe
    const iframe = document.createElement('iframe');
    iframe.src = courseware.embedUrl;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    // 添加更多权限以支持动态图和媒体内容
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen';
    iframe.title = courseware.title;
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    // 添加sandbox属性以允许脚本和表单
    iframe.sandbox = 'allow-scripts allow-same-origin allow-forms allow-popups allow-presentation';
    
    // 添加错误处理和超时检测
    let loadTimeout;
    
    iframe.onerror = function() {
        console.error('Failed to load courseware:', courseware.embedUrl);
        showFallbackContent(courseware);
    };
    
    // 设置加载超时（10秒）
    loadTimeout = setTimeout(() => {
        console.warn('Courseware loading timeout:', courseware.embedUrl);
        showFallbackContent(courseware);
    }, 10000);
    
    function showFallbackContent(courseware) {
        clearTimeout(loadTimeout);
        coursewareFrame.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; padding: 2rem;">
                <div style="background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 15px; backdrop-filter: blur(10px);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">${courseware.icon}</div>
                    <h3 style="margin-bottom: 1rem; font-size: 1.5rem;">${courseware.title}</h3>
                    <p style="margin-bottom: 2rem; opacity: 0.9; line-height: 1.6;">${courseware.description}</p>
                    <div style="margin-bottom: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px; font-size: 0.9rem;">
                        💡 由于安全策略限制，此课件无法在当前页面中直接显示
                    </div>
                    <a href="${courseware.embedUrl.replace('/embed/', '/docs/')}" target="_blank" 
                       style="display: inline-block; background: white; color: #667eea; text-decoration: none; padding: 1rem 2rem; border-radius: 25px; font-weight: bold; transition: transform 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.2);" 
                       onmouseover="this.style.transform='translateY(-2px)'" 
                       onmouseout="this.style.transform='translateY(0)'">
                        🚀 在新窗口中查看课件
                    </a>
                </div>
            </div>
        `;
    }
    
    // 添加加载完成处理
    iframe.onload = function() {
        clearTimeout(loadTimeout);
        console.log('Courseware loaded successfully:', courseware.title);
    };
    
    // 检测iframe内容是否被阻止
    iframe.addEventListener('load', function() {
        try {
            // 尝试访问iframe内容，如果被阻止会抛出异常
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (!iframeDoc || iframeDoc.body.innerHTML === '') {
                setTimeout(() => showFallbackContent(courseware), 2000);
            }
        } catch (e) {
            // 跨域限制，这是正常的，说明iframe可能正在加载外部内容
            console.log('Cross-origin iframe detected, this is normal for external content');
        }
    });
    
    // 显示加载指示器
    coursewareFrame.innerHTML = `
        <div class="loading" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: white; color: #666;">
            <div style="margin-bottom: 1rem;">正在加载课件...</div>
            <div style="width: 40px; height: 40px; border: 3px solid #f3f3f3; border-top: 3px solid #667eea; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        </div>
    `;
    
    // 显示查看器
    viewerSection.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // 延迟添加iframe，确保加载指示器先显示
    setTimeout(() => {
        coursewareFrame.innerHTML = '';
        coursewareFrame.appendChild(iframe);
    }, 100);
}

// 关闭课件查看器
function closeCoursewareViewer() {
    viewerSection.style.display = 'none';
    document.body.style.overflow = 'auto';
    coursewareFrame.innerHTML = '';
}

// 切换分类
function switchCategory(category) {
    currentCategory = category;
    
    // 更新导航状态
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === category) {
            link.classList.add('active');
        }
    });
    
    // 重新渲染课件
    renderCourseware(category);
}

// 绑定事件
function bindEvents() {
    // 导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            switchCategory(category);
        });
    });
    
    // 关闭查看器事件
    closeViewer.addEventListener('click', closeCoursewareViewer);
    
    // 点击背景关闭查看器
    viewerSection.addEventListener('click', (e) => {
        if (e.target === viewerSection) {
            closeCoursewareViewer();
        }
    });
    
    // ESC键关闭查看器
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && viewerSection.style.display === 'flex') {
            closeCoursewareViewer();
        }
    });
}

// 添加新课件的函数（供后续扩展使用，支持多语言）
function addCourseware(courseware) {
    // 生成新的ID
    const newId = Math.max(...coursewareData.map(item => item.id)) + 1;
    
    // 确保标题和描述支持多语言格式
    const newCourseware = {
        ...courseware,
        id: newId,
        title: typeof courseware.title === 'string' ? {
            zh: courseware.title,
            en: courseware.title,
            es: courseware.title,
            fr: courseware.title
        } : courseware.title,
        description: typeof courseware.description === 'string' ? {
            zh: courseware.description,
            en: courseware.description,
            es: courseware.description,
            fr: courseware.description
        } : courseware.description
    };
    
    // 添加到数据数组
    coursewareData.push(newCourseware);
    
    // 如果当前分类匹配，重新渲染
    if (currentCategory === 'all' || currentCategory === courseware.category) {
        renderCourseware(currentCategory);
    }
    
    return newId;
}

// 删除课件的函数（供后续扩展使用）
function removeCourseware(id) {
    const index = coursewareData.findIndex(item => item.id === id);
    if (index !== -1) {
        coursewareData.splice(index, 1);
        renderCourseware(currentCategory);
        return true;
    }
    return false;
}

// 搜索课件的函数（供后续扩展使用，支持多语言）
function searchCourseware(keyword) {
    const results = coursewareData.filter(item => {
        // 获取当前语言的标题和描述
        const title = typeof item.title === 'object' 
            ? item.title[currentLanguage] || item.title.zh
            : item.title;
        const description = typeof item.description === 'object'
            ? item.description[currentLanguage] || item.description.zh
            : item.description;
        
        return title.toLowerCase().includes(keyword.toLowerCase()) ||
               description.toLowerCase().includes(keyword.toLowerCase());
    });
    
    coursewareGrid.innerHTML = results.map(courseware => {
        // 获取当前语言的标题和描述
        const title = typeof courseware.title === 'object' 
            ? courseware.title[currentLanguage] || courseware.title.zh
            : courseware.title;
        const description = typeof courseware.description === 'object'
            ? courseware.description[currentLanguage] || courseware.description.zh
            : courseware.description;
        
        return `
            <div class="courseware-card" data-id="${courseware.id}">
                <div class="card-header">
                    <div class="card-icon">${courseware.icon}</div>
                    <h3 class="card-title">${title}</h3>
                </div>
                <p class="card-description">${description}</p>
                <span class="card-category">${getCategoryMap()[courseware.category]}</span>
            </div>
        `;
    }).join('');
    
    bindCardEvents();
    return results;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 导出API供外部使用
window.CoursewareManager = {
    addCourseware,
    removeCourseware,
    searchCourseware,
    coursewareData,
    // 多语言API
    I18n,
    setLanguage: (lang) => I18n.setLanguage(lang),
    getCurrentLanguage: () => currentLanguage,
    getTranslation: (key) => I18n.t(key)
};