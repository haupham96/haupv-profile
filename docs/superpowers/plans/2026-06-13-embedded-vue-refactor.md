# Embedded Vue Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the static CV page from manual DOM rendering to Vue 3 template syntax while keeping it build-free.

**Architecture:** Keep `assets/data.js` and `assets/avatar.js` as global data sources. Add a local Vue 3 global production build under `assets/vendor/`, link it from `index.html`, and rewrite `assets/app.js` to mount `Vue.createApp` on `#cvRoot`.

**Tech Stack:** Static HTML, CSS, browser JavaScript, Vue 3 global build, Node built-in test runner.

---

### Task 1: Static Regression Test

**Files:**
- Create: `test/vue-static.test.js`

- [ ] **Step 1: Write a failing test**

```javascript
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
  assert.match(app, /\.mount\('#cvRoot'\)/);
  assert.doesNotMatch(app, /document\.getElementById/);
  assert.doesNotMatch(app, /\.innerHTML\s*=/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `rtk node --test test/vue-static.test.js`

Expected: FAIL because Vue is not embedded and the app is still imperative DOM code.

### Task 2: Embedded Vue Asset

**Files:**
- Create: `assets/vendor/vue.global.prod.js`
- Modify: `index.html`

- [ ] **Step 1: Download Vue 3 global production build**

Run: `Invoke-WebRequest -Uri "https://unpkg.com/vue@3/dist/vue.global.prod.js" -OutFile "assets/vendor/vue.global.prod.js"`

- [ ] **Step 2: Link Vue before `assets/app.js`**

Add `<script src="assets/vendor/vue.global.prod.js"></script>` before `assets/app.js`.

### Task 3: Vue Template Refactor

**Files:**
- Modify: `index.html`
- Modify: `assets/app.js`

- [ ] **Step 1: Convert static placeholders to Vue bindings**

Use Vue bindings for language text, contact links, sections, cards, timelines, projects, theme icon, language active state, and avatar state.

- [ ] **Step 2: Replace manual renderer with Vue state/methods**

Use `data`, `computed`, `mounted`, and `methods` to manage language, theme, avatar upload, and print export.

- [ ] **Step 3: Run verification**

Run: `rtk node --test test/vue-static.test.js`

Expected: PASS.
