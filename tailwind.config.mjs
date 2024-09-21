/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans Variable', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        skyblue: {
          50: '#f2f9fd',
          100: '#e5f1f9',
          200: '#c5e3f2',
          300: '#8ecae6',
          400: '#58b2d8',
          500: '#3298c5',
          600: '#237ba6',
          700: '#1d6187',
          800: '#1c5370',
          900: '#1c465e'
        },
        prussianblue: {
          50: '#effaff',
          100: '#ddf5ff',
          200: '#b4edff',
          300: '#72e0ff',
          400: '#27d2ff',
          500: '#00bdfc',
          600: '#0098d9',
          700: '#0079af',
          800: '#006690',
          900: '#035477'
        },
        selectiveyellow: {
          50: '#fffeea',
          100: '#fff9c5',
          200: '#fff485',
          300: '#ffe746',
          400: '#ffd71b',
          500: '#ffb703',
          600: '#e28b00',
          700: '#bb6202',
          800: '#984b08',
          900: '#7c3e0b'
        },
        utorange: {
          50: '#fffbec',
          100: '#fff5d3',
          200: '#ffe8a5',
          300: '#ffd56d',
          400: '#ffb732',
          500: '#ff9f0a',
          600: '#fb8500',
          700: '#cc6302',
          800: '#a14c0b',
          900: '#82400c'
        },
        primary: '#000c'
        // --blue-green: #219ebcff;
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
