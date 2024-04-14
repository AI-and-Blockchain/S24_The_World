/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        theme: {
          ...require('daisyui/src/theming/themes')['light'],
          "primary": "#04a5e5",
          "primary-content": "#eff1f5",
          "secondary": "#fe640b",
          "secondary-content": "#eff1f5",
          "accent": "#ea76cb",
          "accent-content": "#eff1f5",
          "success": "#40a02b",
          "success-content": "#eff1f5",
          "info": "#04a5e5",
          "info-content": "#eff1f5",
          "warning": "#fe640b",
          "warning-content": "#eff1f5",
          "error": "#ea76cb",
          "error-content": "#eff1f5",
          "base-100": "#eff1f5",
          "base-200": "#ccd0da",
          "base-300": "#9ca0b0",
          "base-content": "#4c4f69",
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}
