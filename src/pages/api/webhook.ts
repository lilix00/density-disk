// src/pages/api/webhook.ts
import type { APIRoute } from 'astro';

export const post: APIRoute = async (context) => {
  // 1. 验证请求合法性（如签名）
  const signature = context.request.headers.get('x-hub-signature-256');
  const rawBody = await context.request.text();
  const isValid = verifySignature(rawBody, signature); // 自定义验证函数

  if (!isValid) {
    return new Response('Invalid signature', { status: 401 });
  }

  // 2. 处理 Webhook 数据
  const payload = JSON.parse(rawBody);
  await handleWebhook(payload); // 自定义处理逻辑

  // 3. 返回响应
  return new Response('Webhook processed', { status: 200 });
};

// 示例：GitHub Webhook 签名验证
function verifySignature(rawBody: string, signature: string | null) {
  const secret = import.meta.env.WEBHOOK_SECRET;
  const hmac = crypto.createHmac('sha256', secret);
  const digest = 'sha256=' + hmac.update(rawBody).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature || ''));
}

// 示例：处理逻辑（触发部署、更新内容等）
async function handleWebhook(payload: any) {
  if (payload.repository?.name === 'my-repo') {
    // 执行 Astro 构建命令
    const { execSync } = await import('child_process');
    execSync('npm run build', { stdio: 'inherit' });
  }
}