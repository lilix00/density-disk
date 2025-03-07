import 'kleur/colors';
import { e as decodeKey } from './chunks/astro/server_D_wQWs-u.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_fkMOXrw_.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/_project/%E9%9F%B3%E6%A0%BC%E9%9F%B3%E4%B9%90%E8%AE%A1%E5%88%92/astro_web/density-disk/","cacheDir":"file:///D:/_project/%E9%9F%B3%E6%A0%BC%E9%9F%B3%E4%B9%90%E8%AE%A1%E5%88%92/astro_web/density-disk/node_modules/.astro/","outDir":"file:///D:/_project/%E9%9F%B3%E6%A0%BC%E9%9F%B3%E4%B9%90%E8%AE%A1%E5%88%92/astro_web/density-disk/dist/","srcDir":"file:///D:/_project/%E9%9F%B3%E6%A0%BC%E9%9F%B3%E4%B9%90%E8%AE%A1%E5%88%92/astro_web/density-disk/src/","publicDir":"file:///D:/_project/%E9%9F%B3%E6%A0%BC%E9%9F%B3%E4%B9%90%E8%AE%A1%E5%88%92/astro_web/density-disk/public/","buildClientDir":"file:///D:/_project/%E9%9F%B3%E6%A0%BC%E9%9F%B3%E4%B9%90%E8%AE%A1%E5%88%92/astro_web/density-disk/dist/client/","buildServerDir":"file:///D:/_project/%E9%9F%B3%E6%A0%BC%E9%9F%B3%E4%B9%90%E8%AE%A1%E5%88%92/astro_web/density-disk/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"api/webhook","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/webhook","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/webhook\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"webhook","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/webhook.ts","pathname":"/api/webhook","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"folder/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/folder","isIndex":true,"type":"page","pattern":"^\\/folder\\/?$","segments":[[{"content":"folder","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/folder/index.astro","pathname":"/folder","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"news/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/news","isIndex":true,"type":"page","pattern":"^\\/news\\/?$","segments":[[{"content":"news","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/news/index.astro","pathname":"/news","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"posts/post-1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-1","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-1\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-1.md","pathname":"/posts/post-1","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"posts/post-2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-2","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-2\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-2.md","pathname":"/posts/post-2","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"posts/post-3/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-3","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-3\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-3.md","pathname":"/posts/post-3","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"posts/post-4/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-4","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-4\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-4.md","pathname":"/posts/post-4","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".desc[data-astro-cid-zoshki4t]{display:flex;gap:20px;font-size:14px;color:#bbb}.catename[data-astro-cid-zoshki4t]{flex:1}.content[data-astro-cid-zoshki4t]{margin-top:20px}\nhtml{background-color:#f1f5f9;font-family:sans-serif}body{margin:0 auto;width:100%;max-width:80vw;padding:1rem;line-height:1.5}*{box-sizing:border-box}h1{margin:1rem 0;font-size:2.5rem}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}a[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}\n"}],"routeData":{"route":"/news/[id]","isIndex":false,"type":"page","pattern":"^\\/news\\/([^/]+?)\\/?$","segments":[[{"content":"news","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/news/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/_project/音格音乐计划/astro_web/density-disk/src/pages/posts/post-1.md",{"propagation":"none","containsHead":true}],["D:/_project/音格音乐计划/astro_web/density-disk/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["D:/_project/音格音乐计划/astro_web/density-disk/src/pages/posts/post-2.md",{"propagation":"none","containsHead":true}],["D:/_project/音格音乐计划/astro_web/density-disk/src/pages/posts/post-3.md",{"propagation":"none","containsHead":true}],["D:/_project/音格音乐计划/astro_web/density-disk/src/pages/posts/post-4.md",{"propagation":"none","containsHead":true}],["D:/_project/音格音乐计划/astro_web/density-disk/src/pages/about.astro",{"propagation":"none","containsHead":true}],["D:/_project/音格音乐计划/astro_web/density-disk/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/_project/音格音乐计划/astro_web/density-disk/src/pages/news/[id].astro",{"propagation":"none","containsHead":true}],["D:/_project/音格音乐计划/astro_web/density-disk/src/pages/news/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/posts/post-1@_@md":"pages/posts/post-1.astro.mjs","\u0000@astro-page:src/pages/posts/post-2@_@md":"pages/posts/post-2.astro.mjs","\u0000@astro-page:src/pages/posts/post-3@_@md":"pages/posts/post-3.astro.mjs","\u0000@astro-page:src/pages/posts/post-4@_@md":"pages/posts/post-4.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/webhook@_@ts":"pages/api/webhook.astro.mjs","\u0000@astro-page:src/pages/folder/index@_@astro":"pages/folder.astro.mjs","\u0000@astro-page:src/pages/news/[id]@_@astro":"pages/news/_id_.astro.mjs","\u0000@astro-page:src/pages/news/index@_@astro":"pages/news.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","D:/_project/音格音乐计划/astro_web/density-disk/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CCHsq0-X.mjs","\u0000@astrojs-manifest":"manifest_dhdcIeUr.mjs","D:/_project/音格音乐计划/astro_web/density-disk/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.U36sVhwW.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/_project/音格音乐计划/astro_web/density-disk/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});"]],"assets":["/favicon.svg","/about/index.html","/api/webhook","/blog/index.html","/folder/index.html","/news/index.html","/posts/post-1/index.html","/posts/post-2/index.html","/posts/post-3/index.html","/posts/post-4/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"HOAKFMVgSlnQ40/wsBnKRVk/cZiZ6Mmqzg7y/LAAp+k="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
