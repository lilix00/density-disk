export { renderers } from '../../renderers.mjs';

const post = async (context) => {
  const signature = context.request.headers.get("x-hub-signature-256");
  const rawBody = await context.request.text();
  const isValid = verifySignature(rawBody, signature);
  if (!isValid) {
    return new Response("Invalid signature", { status: 401 });
  }
  const payload = JSON.parse(rawBody);
  await handleWebhook(payload);
  return new Response("Webhook processed", { status: 200 });
};
function verifySignature(rawBody, signature) {
  const secret = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9";
  const hmac = crypto.createHmac("sha256", secret);
  const digest = "sha256=" + hmac.update(rawBody).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature || ""));
}
async function handleWebhook(payload) {
  if (payload.repository?.name === "my-repo") {
    const { execSync } = await import('child_process');
    execSync("npm run build", { stdio: "inherit" });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
