import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, g as renderSlot, u as unescapeHTML, h as renderHead, i as renderScript } from './astro/server_D_wQWs-u.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get default () { return $$About; },
  get file () { return $$file; },
  get url () { return $$url; }
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>${frontmatter.pubDate.toString().slice(0, 10)}</p> <p><em>${frontmatter.description}</em></p> <p>Written by: ${frontmatter.author}</p> <img${addAttribute(frontmatter.image.url, "src")} width="300"${addAttribute(frontmatter.image.alt, "alt")}> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "D:/_project/\u97F3\u683C\u97F3\u4E50\u8BA1\u5212/astro_web/density-disk/src/layouts/MarkdownPostLayout.astro", void 0);

const html$3 = () => "<p>发表于：2022-07-01</p>\n<p>欢迎来到我学习关于 Astro 的新博客！在这里，我将分享我建立新网站的学习历程。</p>\n<h2 id=\"我做了什么\">我做了什么</h2>\n<ol>\n<li>\n<p><strong>安装 Astro</strong>：首先，我创建了一个新的 Astro 项目并设置好了我的在线账号。</p>\n</li>\n<li>\n<p><strong>制作页面</strong>：然后我学习了如何通过创建新的 <code>.astro</code> 文件并将它们保存在 <code>src/pages/</code> 文件夹里来制作页面。</p>\n</li>\n<li>\n<p><strong>发表博客文章</strong>：这是我的第一篇博客文章！我现在有用 Astro 编写的页面和用 Markdown 写的文章了！</p>\n</li>\n</ol>\n<h2 id=\"下一步计划\">下一步计划</h2>\n<p>我将完成 Astro 教程，然后继续编写更多内容。关注我以获取更多信息。</p>";

				const frontmatter$3 = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"我的第一篇博客文章","pubDate":"2022-07-01T00:00:00.000Z","description":"这是我 Astro 博客的第一篇文章。","author":"Astro 学习者","image":{"url":"https://docs.astro.build/assets/rose.webp","alt":"The Astro logo on a dark background with a pink glow."},"tags":["astro","blogging","learning in public"]};
				const file$3 = "D:/_project/音格音乐计划/astro_web/density-disk/src/pages/posts/post-1.md";
				const url$3 = "/posts/post-1";
				function rawContent$3() {
					return "   \r\n                                              \r\n                  \r\n                   \r\n                                  \r\n                   \r\n      \r\n                                                    \r\n                                                                \r\n                                                 \r\n   \r\n\r\n 发表于：2022-07-01\r\n\r\n 欢迎来到我学习关于 Astro 的新博客！在这里，我将分享我建立新网站的学习历程。\r\n\r\n ## 我做了什么\r\n\r\n 1. **安装 Astro**：首先，我创建了一个新的 Astro 项目并设置好了我的在线账号。\r\n\r\n 2. **制作页面**：然后我学习了如何通过创建新的 `.astro` 文件并将它们保存在 `src/pages/` 文件夹里来制作页面。\r\n\r\n 3. **发表博客文章**：这是我的第一篇博客文章！我现在有用 Astro 编写的页面和用 Markdown 写的文章了！\r\n\r\n ## 下一步计划\r\n\r\n 我将完成 Astro 教程，然后继续编写更多内容。关注我以获取更多信息。";
				}
				async function compiledContent$3() {
					return await html$3();
				}
				function getHeadings$3() {
					return [{"depth":2,"slug":"我做了什么","text":"我做了什么"},{"depth":2,"slug":"下一步计划","text":"下一步计划"}];
				}

				const Content$3 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3;
					content.file = file$3;
					content.url = url$3;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file: file$3,
								url: url$3,
								content,
								frontmatter: content,
								headings: getHeadings$3(),
								rawContent: rawContent$3,
								compiledContent: compiledContent$3,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$3())}`
							})}`;
				});

const _page$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$3,
  compiledContent: compiledContent$3,
  default: Content$3,
  file: file$3,
  frontmatter: frontmatter$3,
  getHeadings: getHeadings$3,
  rawContent: rawContent$3,
  url: url$3
}, Symbol.toStringTag, { value: 'Module' }));

const html$2 = () => "<p>在学习 Astro 大约一周后，我决定尝试些新的东西。我编写并导入了一个小组件！</p>";

				const frontmatter$2 = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"我的第二篇博客文章","author":"Astro 学习者","description":"学习了一些 Astro 后，我根本停不下来！","image":{"url":"https://docs.astro.build/assets/arc.webp","alt":"The Astro logo on a dark background with a purple gradient arc."},"pubDate":"2022-07-08T00:00:00.000Z","tags":["blogging","learning in public","successes"]};
				const file$2 = "D:/_project/音格音乐计划/astro_web/density-disk/src/pages/posts/post-2.md";
				const url$2 = "/posts/post-2";
				function rawContent$2() {
					return "   \r\n                                              \r\n                \r\n                 \r\n                                     \r\n      \r\n                                                   \r\n                                                                          \r\n                   \r\n                                                     \r\n   \r\n在学习 Astro 大约一周后，我决定尝试些新的东西。我编写并导入了一个小组件！";
				}
				async function compiledContent$2() {
					return await html$2();
				}
				function getHeadings$2() {
					return [];
				}

				const Content$2 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file: file$2,
								url: url$2,
								content,
								frontmatter: content,
								headings: getHeadings$2(),
								rawContent: rawContent$2,
								compiledContent: compiledContent$2,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$2())}`
							})}`;
				});

const _page$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$2,
  compiledContent: compiledContent$2,
  default: Content$2,
  file: file$2,
  frontmatter: frontmatter$2,
  getHeadings: getHeadings$2,
  rawContent: rawContent$2,
  url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const html$1 = () => "<p>尽管这并不总是一帆风顺，但我很享受使用 Astro 进行搭建。并且，<a href=\"https://astro.build/chat\">Discord 社区</a>真的很友好而且乐于助人！</p>";

				const frontmatter$1 = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"我的第三篇博客文章","author":"Astro 学习者","description":"我遇到了一些问题，但是在社区里面提问真的很有帮助！","image":{"url":"https://docs.astro.build/assets/rays.webp","alt":"The Astro logo on a dark background with rainbow rays."},"pubDate":"2022-07-15T00:00:00.000Z","tags":["astro","learning in public","setbacks","community"]};
				const file$1 = "D:/_project/音格音乐计划/astro_web/density-disk/src/pages/posts/post-3.md";
				const url$1 = "/posts/post-3";
				function rawContent$1() {
					return "   \r\n                                              \r\n                \r\n                 \r\n                                        \r\n      \r\n                                                    \r\n                                                                 \r\n                   \r\n                                                              \r\n   \r\n尽管这并不总是一帆风顺，但我很享受使用 Astro 进行搭建。并且，[Discord 社区](https://astro.build/chat)真的很友好而且乐于助人！";
				}
				async function compiledContent$1() {
					return await html$1();
				}
				function getHeadings$1() {
					return [];
				}

				const Content$1 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file: file$1,
								url: url$1,
								content,
								frontmatter: content,
								headings: getHeadings$1(),
								rawContent: rawContent$1,
								compiledContent: compiledContent$1,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$1())}`
							})}`;
				});

const _page$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$1,
  compiledContent: compiledContent$1,
  default: Content$1,
  file: file$1,
  frontmatter: frontmatter$1,
  getHeadings: getHeadings$1,
  rawContent: rawContent$1,
  url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const html = () => "<p>这篇文章应该会与其他的博客文章一起显示，因为 <code>import.meta.glob()</code> 会返回一个包含所有文章的列表，以创建这个文章列表。</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"我的第四篇博客文章","author":"Astro 学习者","description":"这篇文章会自己出现在列表中！","image":{"url":"https://docs.astro.build/default-og-image.png","alt":"The word astro against an illustration of planets and stars."},"pubDate":"2022-08-08T00:00:00.000Z","tags":["astro","successes"]};
				const file = "D:/_project/音格音乐计划/astro_web/density-disk/src/pages/posts/post-4.md";
				const url = "/posts/post-4";
				function rawContent() {
					return "   \r\n                                              \r\n                  \r\n                   \r\n                             \r\n      \r\n                                                      \r\n                                                                     \r\n                   \r\n                            \r\n   \r\n这篇文章应该会与其他的博客文章一起显示，因为 `import.meta.glob()` 会返回一个包含所有文章的列表，以创建这个文章列表。";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = Object.values(
    [_page$6,_page$5,_page$4,_page$3]
  );
  const pageTitle = "\u6211\u7684 Astro \u5B66\u4E60\u535A\u5BA2";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>在这里，我将分享我的 Astro 学习之旅。</p> <ul> ${allPosts.map((post) => renderTemplate`<li> <a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a> </li>`)} </ul> ` })}`;
}, "D:/_project/\u97F3\u683C\u97F3\u4E50\u8BA1\u5212/astro_web/density-disk/src/pages/blog.astro", void 0);

const $$file$2 = "D:/_project/音格音乐计划/astro_web/density-disk/src/pages/blog.astro";
const $$url$2 = "/blog";

const _page$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "\u9996\u9875";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>My awesome blog subtitle</h2> ` })}`;
}, "D:/_project/\u97F3\u683C\u97F3\u4E50\u8BA1\u5212/astro_web/density-disk/src/pages/index.astro", void 0);

const $$file$1 = "D:/_project/音格音乐计划/astro_web/density-disk/src/pages/index.astro";
const $$url$1 = "";

const _page$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const allPage = Object.values(
    [_page,_page$2,_page$1]
  );
  console.log(allPage);
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"> <a href="/">首页</a> <a href="/about/">关于</a> <a href="/blog/">博客</a> <a href="/news/">新闻</a> </div>`;
}, "D:/_project/\u97F3\u683C\u97F3\u4E50\u8BA1\u5212/astro_web/density-disk/src/components/Navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav> ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> </header>`;
}, "D:/_project/\u97F3\u683C\u97F3\u4E50\u8BA1\u5212/astro_web/density-disk/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-yxtifmrq>${platform}</a> `;
}, "D:/_project/\u97F3\u683C\u97F3\u4E50\u8BA1\u5212/astro_web/density-disk/src/components/Social.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> ${renderComponent($$result, "Social", $$Social, { "platform": "twitter", "username": "astrodotbuild", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "withastro", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "youtube", "username": "astrodotbuild", "data-astro-cid-sz7xmlte": true })} </footer>`;
}, "D:/_project/\u97F3\u683C\u97F3\u4E50\u8BA1\u5212/astro_web/density-disk/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="zh-cn"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "D:/_project/\u97F3\u683C\u97F3\u4E50\u8BA1\u5212/astro_web/density-disk/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/_project/\u97F3\u683C\u97F3\u4E50\u8BA1\u5212/astro_web/density-disk/src/layouts/BaseLayout.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "\u5173\u4E8E\u6211";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>111</h2> ` })}`;
}, "D:/_project/\u97F3\u683C\u97F3\u4E50\u8BA1\u5212/astro_web/density-disk/src/pages/about.astro", void 0);

const $$file = "D:/_project/音格音乐计划/astro_web/density-disk/src/pages/about.astro";
const $$url = "/about";

export { $$BaseLayout as $, _page as _, _page$2 as a, _page$6 as b, _page$5 as c, _page$4 as d, _page$3 as e, _page$1 as f };
