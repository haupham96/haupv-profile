/* =============================================================================
 *  Profile / CV — Vue application logic
 *  Data-driven render from window.T / window.CONTACT. Light & dark theming via
 *  CSS variables, EN/VI toggle, print-based PDF export, drag/click avatar upload.
 *  State (lang, theme, photo) persists to localStorage.
 * ========================================================================== */
(function () {
    'use strict';

    var ref = Vue.ref;
    var reactive = Vue.reactive;
    var computed = Vue.computed;
    var onMounted = Vue.onMounted;

    var LIGHT = window.CV_THEME.LIGHT;
    var DARK = window.CV_THEME.DARK;
    var store = window.CV_STORE;
    var cvRoot = document.querySelector('#cvRoot');

    function initialLang() {
        var saved = store.get('cv_lang');
        return saved === 'vi' ? 'vi' : 'en';
    }

    function initialTheme() {
        var saved = store.get('cv_theme');
        return saved === 'dark' ? 'dark' : 'light';
    }

    Vue.createApp({
        setup: function () {
            var state = reactive({
                contact: window.CONTACT,
                icons: window.CV_ICON,
                translations: window.T
            });
            var lang = ref(initialLang());
            var theme = ref(initialTheme());
            var avatarDragging = ref(false);
            var avatarPhoto = ref(store.get('cv_avatar') || window.DEFAULT_AVATAR || null);
            var avatarInput = ref(null);

            var current = computed(function () {
                return state.translations[lang.value] || state.translations.en;
            });
            var mailHref = computed(function () {
                return 'mailto:' + state.contact.email;
            });
            var phoneHref = computed(function () {
                return 'tel:' + state.contact.phone;
            });
            var avatarSrc = computed(function () {
                return avatarPhoto.value;
            });
            var themeIcon = computed(function () {
                return theme.value === 'dark' ? state.icons.sun : state.icons.moon;
            });
            var contactCards = computed(function () {
                return [
                    {
                        href: mailHref.value,
                        icon: state.icons.mailSm,
                        label: current.value.ui.labelEmail,
                        value: state.contact.email,
                        truncate: true
                    },
                    {
                        href: phoneHref.value,
                        icon: state.icons.phone,
                        label: current.value.ui.labelPhone,
                        value: state.contact.phone
                    },
                    {
                        icon: state.icons.pin,
                        label: current.value.ui.labelLocation,
                        value: current.value.ui.location
                    },
                    {
                        href: state.contact.facebookUrl,
                        blank: true,
                        icon: state.icons.facebook,
                        label: 'Facebook',
                        value: state.contact.facebookLabel
                    }
                ];
            });

            function applyTheme() {
                var root = cvRoot;
                var vars = theme.value === 'dark' ? DARK : LIGHT;
                var key;

                for (key in vars) {
                    root.style.setProperty(key, vars[key]);
                }

                document.body.style.background = vars['--bg'];
                document.documentElement.lang = lang.value;
            }

            function setLang(nextLang) {
                lang.value = nextLang;
                store.set('cv_lang', nextLang);
                applyTheme();
            }

            function toggleTheme() {
                theme.value = theme.value === 'light' ? 'dark' : 'light';
                store.set('cv_theme', theme.value);
                applyTheme();
            }

            function exportPdf() {
                window.print();
            }

            function chooseAvatar() {
                if (avatarInput.value) avatarInput.value.click();
            }

            function onAvatarKeydown(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    chooseAvatar();
                }
            }

            function setAvatarDragging(dragging) {
                avatarDragging.value = dragging;
            }

            function onAvatarChange(event) {
                loadAvatarFile(event.target.files && event.target.files[0]);
            }

            function onAvatarDrop(event) {
                avatarDragging.value = false;
                if (event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) {
                    loadAvatarFile(event.dataTransfer.files[0]);
                }
            }

            function loadAvatarFile(file) {
                var reader;

                if (!file || !/^image\//.test(file.type)) return;

                reader = new FileReader();
                reader.onload = function () {
                    avatarPhoto.value = reader.result;
                    store.set('cv_avatar', reader.result);
                };
                reader.readAsDataURL(file);
            }

            function projectLinkIcon(url) {
                if (/play\.google\.com/.test(url)) return state.icons.googlePlay;
                if (/apps\.apple\.com/.test(url)) return state.icons.appStore;
                return '';
            }

            onMounted(function () {
                applyTheme();
            });

            return {
                lang: lang,
                theme: theme,
                avatarDragging: avatarDragging,
                avatarPhoto: avatarPhoto,
                avatarInput: avatarInput,
                contact: state.contact,
                icons: state.icons,
                current: current,
                mailHref: mailHref,
                phoneHref: phoneHref,
                avatarSrc: avatarSrc,
                themeIcon: themeIcon,
                contactCards: contactCards,
                setLang: setLang,
                toggleTheme: toggleTheme,
                exportPdf: exportPdf,
                chooseAvatar: chooseAvatar,
                onAvatarKeydown: onAvatarKeydown,
                setAvatarDragging: setAvatarDragging,
                onAvatarChange: onAvatarChange,
                onAvatarDrop: onAvatarDrop,
                loadAvatarFile: loadAvatarFile,
                projectLinkIcon: projectLinkIcon
            };
        }
    }).mount(cvRoot);
})();
