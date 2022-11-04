import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#FFFFFF',
      'background-pale': '#FAFCFC',
      'background-normal': '#F2FEFF',
      'background-blue-grey': '#83A3A6',
      'background-black': '#49504D',
      surface: '#FFFFFF',
      primary: '#0CC2A3',
      'primary-darken-1': '#0FB496',
      'primary-darken-2': '#0B9B80',
      'primary-darken-3': '#0A7A66',
      'primary-darken-4': '#03483B',
      'primary-lighten-1': '#8EE2D3',
      'primary-lighten-2': '#B3ECE2',
      'primary-lighten-3': '#D4F4EE',
      'primary-lighten-4': '#F1FCFA',
      accent: '#E8743A',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FF4163',
      border: '#EDF0F0',
      'border-emphasis': '#C6CCCB',
      text: '#222625',
      'text-dark-grey': '#585E5D',
      'text-light-grey': '#9BA3A1',
      'text-white': '#FFF',
    },
  }

  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
