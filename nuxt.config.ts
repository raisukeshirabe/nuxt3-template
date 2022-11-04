const envPath = `envs/.env.${process.env.ENV || 'local'}`
import dotenv from 'dotenv'
dotenv.config({
  path: envPath,
})
const { BASE_URL } = process.env

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  env: {
    baseUrl: BASE_URL,
  },
  publicRuntimeConfig: {
    baseUrl: BASE_URL,
  },
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: 'nuxt3-template',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon_logo.ico' }],
    },
  },
  // https://next.vuetifyjs.com/en/getting-started/installation/
  css: [
    'vuetify/lib/styles/main.sass',
    'mdi/css/materialdesignicons.min.css',
    '@/assets/_main.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ['@use "@/assets/variables.scss" as *;'],
        },
      },
    },
  },
})
