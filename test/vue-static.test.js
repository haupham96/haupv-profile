const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');

function read(relativePath) {
    return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

test('index embeds local Vue before the app script', () => {
    const html = read('index.html');
    const vueIndex = html.indexOf('assets/vendor/vue.global.prod.js');
    const appIndex = html.indexOf('assets/app.js');

    assert.notEqual(vueIndex, -1);
    assert.notEqual(appIndex, -1);
    assert.ok(vueIndex < appIndex);
    assert.match(html, /id="cvRoot"/);
});

test('index uses Vue template directives for rendered collections and events', () => {
    const html = read('index.html');

    assert.match(html, /v-for=/);
    assert.match(html, /@click=/);
    assert.match(html, /:href=/);
    assert.match(html, /{{/);
});

test('app mounts a Vue application and no longer performs manual id rendering', () => {
    const app = read('assets/app.js');

    assert.match(app, /Vue\.createApp/);
    assert.match(app, /\.mount\(cvRoot\)/);
    assert.doesNotMatch(app, /document\.getElementById/);
    assert.doesNotMatch(app, /\.innerHTML\s*=/);
});

test('app applies theme variables to the mounted Vue element', () => {
    const app = read('assets/app.js');

    assert.match(app, /var cvRoot = document\.querySelector\('#cvRoot'\);/);
    assert.match(app, /var root = cvRoot;/);
    assert.match(app, /\.mount\(cvRoot\)/);
    assert.doesNotMatch(app, /var root = this\.\$el;/);
    assert.doesNotMatch(app, /this\.\$refs\.root/);
});

test('theme palettes and icons live outside the Vue app module', () => {
    const html = read('index.html');
    const app = read('assets/app.js');
    const config = read('assets/config.js');
    const configIndex = html.indexOf('assets/config.js');
    const appIndex = html.indexOf('assets/app.js');

    assert.notEqual(configIndex, -1);
    assert.ok(configIndex < appIndex);
    assert.match(config, /window\.CV_THEME/);
    assert.match(config, /window\.CV_ICON/);
    assert.match(app, /window\.CV_THEME\.LIGHT/);
    assert.match(app, /window\.CV_THEME\.DARK/);
    assert.match(app, /window\.CV_ICON/);
    assert.doesNotMatch(app, /var LIGHT = \{/);
    assert.doesNotMatch(app, /var DARK = \{/);
    assert.doesNotMatch(app, /var ICON = \{/);
});

test('icons are stored as SVG files, not inline JavaScript strings', () => {
    const config = read('assets/config.js');
    const app = read('assets/app.js');
    const html = read('index.html');
    const iconFiles = [
        'sun', 'moon', 'download', 'github', 'mail', 'phone',
        'pin', 'facebook', 'cap', 'cube', 'arrow', 'google-play', 'app-store'
    ];

    assert.doesNotMatch(config, /<svg/);
    assert.match(config, /assets\/icons\/github\.svg#icon-github/);
    assert.doesNotMatch(app, /v-html="icons/);
    assert.doesNotMatch(html, /v-html="icons/);

    for (const name of iconFiles) {
        const file = `assets/icons/${name}.svg`;
        const svg = read(file);

        assert.match(svg, /<svg/);
        assert.match(svg, new RegExp(`id="icon-${name}"`));
    }
});

test('localStorage wrapper lives outside the Vue app module', () => {
    const html = read('index.html');
    const app = read('assets/app.js');
    const store = read('assets/store.js');
    const storeIndex = html.indexOf('assets/store.js');
    const appIndex = html.indexOf('assets/app.js');

    assert.notEqual(storeIndex, -1);
    assert.ok(storeIndex < appIndex);
    assert.match(store, /window\.CV_STORE/);
    assert.match(store, /localStorage\.getItem/);
    assert.match(store, /localStorage\.setItem/);
    assert.match(app, /var store = window\.CV_STORE;/);
    assert.doesNotMatch(app, /localStorage\.getItem/);
    assert.doesNotMatch(app, /localStorage\.setItem/);
    assert.doesNotMatch(app, /var store = \{\s*get:/);
});

test('Vue app uses Composition API setup, ref, reactive, and computed', () => {
    const app = read('assets/app.js');

    assert.match(app, /var ref = Vue\.ref;/);
    assert.match(app, /var reactive = Vue\.reactive;/);
    assert.match(app, /var computed = Vue\.computed;/);
    assert.match(app, /setup: function \(\) \{/);
    assert.match(app, /var state = reactive\(\{/);
    assert.match(app, /var avatarPhoto = ref\(/);
    assert.match(app, /return \{/);
    assert.doesNotMatch(app, /data: function \(\)/);
    assert.doesNotMatch(app, /computed: \{/);
    assert.doesNotMatch(app, /methods: \{/);
});
