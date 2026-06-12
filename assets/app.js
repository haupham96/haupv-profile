/* =============================================================================
 *  Profile / CV — application logic
 *  Data-driven render from window.T / window.CONTACT. Light & dark theming via
 *  CSS variables, EN/VI toggle, print-based PDF export, drag/click avatar upload.
 *  State (lang, theme, photo) persists to localStorage.
 * ========================================================================== */
(function () {
    'use strict';

    /* ---- Theme palettes (mirrors the design's CSS-variable tokens) ---------- */
    var LIGHT = {
        '--bg': '#f5f7fa',
        '--bg2': '#eceff3',
        '--nav': 'rgba(255,255,255,0.82)',
        '--card': '#ffffff',
        '--card2': '#f8fafc',
        '--text': '#0f172a',
        '--muted': '#566173',
        '--muted2': '#8a94a3',
        '--border': '#e6e9ee',
        '--accent': '#0284c7',
        '--accent2': '#0ea5e9',
        '--accent-soft': '#e6f3fb',
        '--accent-text': '#0369a1',
        '--shadow': 'rgba(15,23,42,0.06)',
        '--shadow-lg': 'rgba(15,23,42,0.10)'
    };
    var DARK = {
        '--bg': '#0a0f1a',
        '--bg2': '#121d31',
        '--nav': 'rgba(10,15,26,0.82)',
        '--card': '#111c30',
        '--card2': '#0d1626',
        '--text': '#e9eef6',
        '--muted': '#9aa7b8',
        '--muted2': '#647184',
        '--border': 'rgba(255,255,255,0.09)',
        '--accent': '#38bdf8',
        '--accent2': '#7dd3fc',
        '--accent-soft': 'rgba(56,189,248,0.13)',
        '--accent-text': '#9bd9fb',
        '--shadow': 'rgba(0,0,0,0.45)',
        '--shadow-lg': 'rgba(0,0,0,0.55)'
    };

    /* ---- Inline SVG icon set ------------------------------------------------ */
    var ICON = {
        sun: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.5"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>',
        moon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path></svg>',
        download: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 11l5 5 5-5M5 21h14"></path></svg>',
        github: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.94.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"></path></svg>',
        mail: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>',
        mailSm: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>',
        phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"></path></svg>',
        pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
        facebook: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"></path></svg>',
        cap: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z"></path><path d="M6 12v5c3 2 9 2 12 0v-5"></path></svg>',
        cube: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 7 4v10l-7 4-7-4V7z"></path><path d="m12 3v18M5 7l7 4 7-4"></path></svg>',
        arrow: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"></path></svg>',
        googlePlay: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 2.3a1 1 0 0 0-.6.93v17.54a1 1 0 0 0 .6.93l10-9.7-10-9.7zm11.2 8.5L5.4 1.6l11.3 6.5-2 2.7zm0 2.4 2 2.7L5.4 22.4l9.4-9.2zm1.6-1.2 3.4-2a1 1 0 0 0 0-1.75l-3.4-2L13.9 12l2.5 2z"></path></svg>',
        appStore: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 1.6c.1 1-.3 2-1 2.8-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 1-2.7.7-.8 1.8-1.4 2.7-1.4zM19 17.3c-.5 1.2-.8 1.7-1.4 2.7-.9 1.4-2.2 3.1-3.8 3.1-1.4 0-1.8-.9-3.7-.9s-2.3.9-3.7.9c-1.6 0-2.8-1.6-3.7-2.9-2.5-3.7-2.8-8-1.2-10.3 1.1-1.6 2.9-2.6 4.6-2.6 1.7 0 2.7 1 4.1 1 1.3 0 2.1-1 4.1-1 1.5 0 3.1.8 4.2 2.2-3.7 2-3.1 7.3.5 7.8z"></path></svg>'
    };

    /* ---- Small helpers ------------------------------------------------------ */
    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'})[c];
        });
    }

    function el(id) {
        return document.getElementById(id);
    }

    var store = {
        get: function (k) {
            try {
                return localStorage.getItem(k);
            } catch (e) {
                return null;
            }
        },
        set: function (k, v) {
            try {
                localStorage.setItem(k, v);
            } catch (e) {
            }
        }
    };

    /* ---- App state ---------------------------------------------------------- */
    var state = {lang: 'en', theme: 'light'};
    var sLang = store.get('cv_lang');
    if (sLang === 'en' || sLang === 'vi') state.lang = sLang;
    var sTheme = store.get('cv_theme');
    if (sTheme === 'light' || sTheme === 'dark') state.theme = sTheme;

    /* ---- Theme application -------------------------------------------------- */
    function applyTheme() {
        var root = el('cvRoot');
        var vars = state.theme === 'dark' ? DARK : LIGHT;
        for (var k in vars) root.style.setProperty(k, vars[k]);
        document.body.style.background = vars['--bg'];
        document.documentElement.lang = state.lang;
        var tBtn = el('themeBtn');
        tBtn.innerHTML = state.theme === 'dark' ? ICON.sun : ICON.moon;
    }

    /* ---- Render: chrome (header text, anything language-bound outside body) -- */
    function render() {
        var d = window.T[state.lang] || window.T.en;
        var c = window.CONTACT;

        // Nav links
        el('navAbout').textContent = d.nav.about;
        el('navSkills').textContent = d.nav.skills;
        el('navExperience').textContent = d.nav.experience;
        el('navProjects').textContent = d.nav.projects;

        // Language segmented control active state
        el('btnEn').setAttribute('data-active', state.lang === 'en');
        el('btnVi').setAttribute('data-active', state.lang === 'vi');

        // Export button label
        el('exportLabel').textContent = d.ui.exportPdf;

        // ---- Hero ----
        el('availText').textContent = d.ui.available;
        el('dobLabel').textContent = d.ui.labelDob;
        el('dobValue').textContent = c.dob;
        el('roleTitle').textContent = d.ui.roleTitle;
        el('tagline').textContent = d.ui.tagline;
        el('emailMeText').textContent = d.ui.emailMe;
        el('heroGithub').href = c.githubUrl;
        el('heroEmail').href = 'mailto:' + c.email;

        // ---- Contact cards ----
        el('contactGrid').innerHTML = [
            contactCard({
                href: 'mailto:' + c.email,
                link: true,
                icon: ICON.mailSm,
                label: d.ui.labelEmail,
                value: c.email,
                truncate: true
            }),
            contactCard({href: 'tel:' + c.phone, link: true, icon: ICON.phone, label: d.ui.labelPhone, value: c.phone}),
            contactCard({icon: ICON.pin, label: d.ui.labelLocation, value: d.ui.location}),
            contactCard({
                href: c.facebookUrl,
                link: true,
                blank: true,
                icon: ICON.facebook,
                label: 'Facebook',
                value: c.facebookLabel
            })
        ].join('');

        // ---- About ----
        el('aboutNum').textContent = '01';
        el('aboutTitle').textContent = d.ui.sectionAbout;
        el('aboutBody').innerHTML = d.about.map(function (p) {
            return '<p style="margin:0;font-size:16px;line-height:1.7;color:var(--muted);text-wrap:pretty">' + esc(p) + '</p>';
        }).join('');

        // ---- Skills ----
        el('skillsNum').textContent = '02';
        el('skillsTitle').textContent = d.ui.sectionSkills;
        el('skillsGrid').innerHTML = d.skills.map(function (g) {
            var chips = g.items.map(function (it) {
                return '<span class="chip chip-soft">' + esc(it) + '</span>';
            }).join('');
            return '<div class="card pad20" data-print-avoid>' +
                '<h3 class="kicker">' + esc(g.cat) + '</h3>' +
                '<div style="display:flex;flex-wrap:wrap;gap:8px">' + chips + '</div></div>';
        }).join('');

        // ---- Education ----
        el('eduNum').textContent = '03';
        el('eduTitle').textContent = d.ui.sectionEducation;
        var edu = d.education;
        el('eduCard').innerHTML =
            '<span class="edu-ico">' + ICON.cap + '</span>' +
            '<div style="flex:1;min-width:240px">' +
            '<div style="display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;align-items:baseline">' +
            '<h3 class="edu-school">' + esc(edu.school) + '</h3>' +
            '<span class="mono-meta">' + esc(edu.period) + '</span>' +
            '</div>' +
            '<p class="edu-prog">' + esc(edu.program) + '</p>' +
            '<div style="display:flex;flex-wrap:wrap;gap:7px">' +
            edu.tech.map(function (t) {
                return '<span class="chip chip-neutral">' + esc(t) + '</span>';
            }).join('') +
            '</div>' +
            '</div>';

        // ---- Experience timeline ----
        el('expNum').textContent = '04';
        el('expTitle').textContent = d.ui.sectionExperience;
        el('timeline').innerHTML = d.experience.map(function (job) {
            var projects = job.projects.map(function (proj) {
                var stack = proj.stack.map(function (t) {
                    return '<span class="chip chip-soft sm">' + esc(t) + '</span>';
                }).join('');
                var bullets = proj.bullets.map(function (b) {
                    return '<li class="bullet">' + esc(b) + '</li>';
                }).join('');
                return '<div class="proj-card" data-print-avoid>' +
                    '<div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:4px">' +
                    '<h4 class="proj-name">' + esc(proj.name) + '</h4></div>' +
                    '<p class="proj-sub">' + esc(proj.sub) + '</p>' +
                    '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px">' + stack + '</div>' +
                    '<ul class="bullets">' + bullets + '</ul>' +
                    '</div>';
            }).join('');

            var current = job.current ? '<span class="dot-live">●</span>' : '';
            return '<div class="tl-item">' +
                '<span class="tl-node"></span>' +
                '<div style="display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;align-items:baseline;margin-bottom:4px">' +
                '<h3 class="tl-company">' + esc(job.company) + '</h3>' +
                '<span class="tl-period">' + current + esc(job.period) + '</span>' +
                '</div>' +
                '<p class="tl-role">' + esc(job.role) + ' · <span style="color:var(--muted);font-weight:500">' + esc(job.domain) + '</span></p>' +
                '<div style="display:flex;flex-direction:column;gap:16px">' + projects + '</div>' +
                '</div>';
        }).join('');

        // ---- Personal projects ----
        el('prjNum').textContent = '05';
        el('prjTitle').textContent = d.ui.sectionProjects;
        el('projectsGrid').innerHTML = d.projects.map(function (p) {
            var links = p.links.map(function (l) {
                var inner = /play\.google\.com/.test(l.url) ? ICON.googlePlay + esc(l.label)
                    : /apps\.apple\.com/.test(l.url) ? ICON.appStore + esc(l.label)
                        : esc(l.label) + ICON.arrow;
                return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener" class="prj-link">' + inner + '</a>';
            }).join('');
            var ico = p.icon
                ? '<img src="' + esc(p.icon) + '" alt="' + esc(p.name) + '" style="width:100%;height:100%;object-fit:cover;display:block">'
                : ICON.cube;
            return '<div class="card prj-card-outer" data-print-avoid>' +
                '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px">' +
                '<span class="prj-ico" style="overflow:hidden">' + ico + '</span>' +
                '<span class="kicker" style="margin:0">' + esc(p.tag) + '</span>' +
                '</div>' +
                '<h3 class="prj-title">' + esc(p.name) + '</h3>' +
                '<p class="prj-desc">' + esc(p.desc) + '</p>' +
                '<div style="display:flex;flex-wrap:wrap;gap:8px">' + links + '</div>' +
                '</div>';
        }).join('');

        // ---- Footer ----
        el('footRole').textContent = d.ui.roleTitle + ' · ' + d.ui.location;
        el('footEmail').textContent = c.email;
        el('footEmail').href = 'mailto:' + c.email;
        el('footGithub').href = c.githubUrl;
        el('footFacebook').href = c.facebookUrl;
    }

    function contactCard(o) {
        var tag = o.link ? 'a' : 'div';
        var attrs = o.link ? ' href="' + esc(o.href) + '"' + (o.blank ? ' target="_blank" rel="noopener"' : '') + ' class="card contact-card link"' : ' class="card contact-card"';
        var valCls = 'contact-val' + (o.truncate ? ' truncate' : '');
        return '<' + tag + attrs + ' data-print-avoid>' +
            '<span class="contact-ico">' + o.icon + '</span>' +
            '<span style="min-width:0">' +
            '<span class="contact-label">' + esc(o.label) + '</span>' +
            '<span class="' + valCls + '">' + esc(o.value) + '</span>' +
            '</span>' +
            '</' + tag + '>';
    }

    /* ---- Avatar: persisted photo + click / drag-drop upload ----------------- */
    function initAvatar() {
        var frame = el('avatarFrame');
        var img = el('avatarImg');
        var ph = el('avatarPh');
        var input = el('avatarInput');

        function show(src) {
            if (src) {
                img.src = src;
                img.style.display = 'block';
                ph.style.display = 'none';
            } else {
                img.removeAttribute('src');
                img.style.display = 'none';
                ph.style.display = 'flex';
            }
        }

        var saved = store.get('cv_avatar');
        show(saved || window.DEFAULT_AVATAR || null);

        function loadFile(file) {
            if (!file || !/^image\//.test(file.type)) return;
            var reader = new FileReader();
            reader.onload = function () {
                store.set('cv_avatar', reader.result);
                show(reader.result);
            };
            reader.readAsDataURL(file);
        }

        frame.addEventListener('click', function () {
            input.click();
        });
        frame.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                input.click();
            }
        });
        input.addEventListener('change', function () {
            loadFile(input.files[0]);
        });

        ['dragenter', 'dragover'].forEach(function (ev) {
            frame.addEventListener(ev, function (e) {
                e.preventDefault();
                frame.classList.add('drag');
            });
        });
        ['dragleave', 'drop'].forEach(function (ev) {
            frame.addEventListener(ev, function (e) {
                e.preventDefault();
                frame.classList.remove('drag');
            });
        });
        frame.addEventListener('drop', function (e) {
            if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) loadFile(e.dataTransfer.files[0]);
        });
    }

    /* ---- Wire up controls --------------------------------------------------- */
    function setLang(lang) {
        state.lang = lang;
        store.set('cv_lang', lang);
        render();
        applyTheme();
    }

    function toggleTheme() {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        store.set('cv_theme', state.theme);
        applyTheme();
    }

    function init() {
        el('btnEn').addEventListener('click', function () {
            setLang('en');
        });
        el('btnVi').addEventListener('click', function () {
            setLang('vi');
        });
        el('themeBtn').addEventListener('click', toggleTheme);
        el('exportBtn').addEventListener('click', function () {
            window.print();
        });

        initAvatar();
        render();
        applyTheme();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
