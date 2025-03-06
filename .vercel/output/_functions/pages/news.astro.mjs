import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_D_wQWs-u.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/about_D1RJcwdj.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwd2QiOiJlZTk4ODFmNDRlNzk1ODgyODcyYWNkN2E0N2RjOGJjYyIsImlzcyI6Ind3dy5kZ2JxLm5ldCIsImF1ZCI6Ind3dy5kZ2JxLm5ldCIsImlhdCI6MTc0MTI0MzEyMywibmJmIjoxNzQxMjQzMTIzLCJleHAiOjE3NDM4MzUxMjMsImp0aSI6eyJpZCI6MSwidHlwZSI6ImFkbWluIn19.U_DMquDAQj7dOwDmjl6g2QIQELhFN-xq0WQ2tFlfHbQ";
  const res = await fetch(
    `https://www.dgbq.net/adminapi/cms/cms?pid=0&title=&page=1&limit=20`,
    {
      method: "GET",
      // 或 POST、PUT 等
      headers: {
        "Authori-zation": `Bearer ${token}`,
        // Bearer Token 格式
        "Content-Type": "application/json"
        // 根据需求设置
      }
    }
  ).then((res2) => res2.json());
  const allNews = res.data.list;
  console.log("-----", allNews);
  const pageTitle = "\u5B98\u65B9\u52A8\u6001";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-xzrtoo6z": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="newList" data-astro-cid-xzrtoo6z> ${allNews.map((news) => renderTemplate`<a class="news"${addAttribute("./" + news.id, "href")} data-astro-cid-xzrtoo6z> <img${addAttribute(news.image, "src")} width="300"${addAttribute(news.image, "alt")} data-astro-cid-xzrtoo6z> <div data-astro-cid-xzrtoo6z> <p class="title" data-astro-cid-xzrtoo6z>${news.title}</p> <p class="message" data-astro-cid-xzrtoo6z> <em data-astro-cid-xzrtoo6z>${news.intr}</em> </p> <div class="attribute" data-astro-cid-xzrtoo6z> <p class="time" data-astro-cid-xzrtoo6z>${news.add_time}</p> <p class="view" data-astro-cid-xzrtoo6z>${news.visit}</p> </div> </div> </a>`)} </div> ` })} `;
}, "D:/_project/\u97F3\u683C\u97F3\u4E50\u8BA1\u5212/astro_web/density-disk/src/pages/news/index.astro", void 0);

const $$file = "D:/_project/音格音乐计划/astro_web/density-disk/src/pages/news/index.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
