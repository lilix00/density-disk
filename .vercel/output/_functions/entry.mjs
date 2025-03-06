import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_B4pXn6ng.mjs';
import { manifest } from './manifest_CRMyWERU.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/webhook.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/folder.astro.mjs');
const _page5 = () => import('./pages/news/_id_.astro.mjs');
const _page6 = () => import('./pages/news.astro.mjs');
const _page7 = () => import('./pages/posts/post-1.astro.mjs');
const _page8 = () => import('./pages/posts/post-2.astro.mjs');
const _page9 = () => import('./pages/posts/post-3.astro.mjs');
const _page10 = () => import('./pages/posts/post-4.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/webhook.ts", _page2],
    ["src/pages/blog.astro", _page3],
    ["src/pages/folder/index.astro", _page4],
    ["src/pages/news/[id].astro", _page5],
    ["src/pages/news/index.astro", _page6],
    ["src/pages/posts/post-1.md", _page7],
    ["src/pages/posts/post-2.md", _page8],
    ["src/pages/posts/post-3.md", _page9],
    ["src/pages/posts/post-4.md", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "fdce062f-8f17-4bc4-9b9f-92d4410a6d58",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
