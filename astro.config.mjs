// @ts-check
import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import vercel from '@astrojs/vercel'
import node from '@astrojs/node'

export default defineConfig({
  // SSG 模式
  // integrations: [preact()],
  // 启用 SSR 模式
  output: 'static',
  adapter: vercel(), // 使用 Vercel 适配器
})
