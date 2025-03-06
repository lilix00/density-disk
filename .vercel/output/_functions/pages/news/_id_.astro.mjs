import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_D_wQWs-u.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/about_D1RJcwdj.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwd2QiOiJlZTk4ODFmNDRlNzk1ODgyODcyYWNkN2E0N2RjOGJjYyIsImlzcyI6Ind3dy5kZ2JxLm5ldCIsImF1ZCI6Ind3dy5kZ2JxLm5ldCIsImlhdCI6MTc0MTI0MzEyMywibmJmIjoxNzQxMjQzMTIzLCJleHAiOjE3NDM4MzUxMjMsImp0aSI6eyJpZCI6MSwidHlwZSI6ImFkbWluIn19.U_DMquDAQj7dOwDmjl6g2QIQELhFN-xq0WQ2tFlfHbQ";
  const { id } = Astro2.params;
  const res = await fetch(`https://www.dgbq.net/api/article/details/${id}`, {
    method: "GET",
    // 或 POST、PUT 等
    headers: {
      "Authori-zation": `Bearer ${token}`,
      // Bearer Token 格式
      "Content-Type": "application/json"
      // 根据需求设置
    }
  }).then((res2) => res2.json());
  const newsData = res.data;
  console.log("-------", res);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": newsData.title, "data-astro-cid-zoshki4t": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="desc" data-astro-cid-zoshki4t> <div class="catename" data-astro-cid-zoshki4t>${newsData.catename}</div> <div class="add_time" data-astro-cid-zoshki4t>发布时间：${newsData.add_time}</div> <div class="visit" data-astro-cid-zoshki4t>浏览量：${newsData.visit}</div> </div> <div class="content" data-astro-cid-zoshki4t>${unescapeHTML(newsData.content)}</div> ` })} `;
}, "D:/_project/\u97F3\u683C\u97F3\u4E50\u8BA1\u5212/astro_web/density-disk/src/pages/news/[id].astro", void 0);

const $$file = "D:/_project/音格音乐计划/astro_web/density-disk/src/pages/news/[id].astro";
const $$url = "/news/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
