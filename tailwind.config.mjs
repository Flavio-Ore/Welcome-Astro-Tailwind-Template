import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      accent: 'rgb(136, 58, 234)',
      'accent-light': 'rgb(224, 204, 250)',
      'accent-dark': 'rgb(49, 10, 101)',
      html: 'rgb(19, 21, 26)'
    },
    fontFamily: {
      'sans-serif': [
        '-apple-system',
        'BlinkMacSystemFont',
        'avenir next',
        'avenir',
        'segoe ui',
        'helvetica neue',
        'helvetica',
        'Cantarell',
        'Ubuntu',
        'roboto',
        'noto',
        'arial',
        'sans-serif'
      ],
      code: [
        'Menlo',
        'Monaco',
        'Lucida Console',
        'Liberation Mono',
        'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono',
        'Courier New',
        'monospace'
      ]
    },
    extend: {
      backgroundColor: {
        code: 'rgba(224, 204, 250, 0.12)'
      },
      backgroundImage: {
        'accent-gradient':
          'linear-gradient(45deg, rgb(136, 58, 234), rgb(224, 204, 250) 30%, white 60%)'
      },
      colors: {
        whiteEyes: 'rgb(242, 242, 242)',
        blackEyes: 'rgb(2, 2, 2)'
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', '&:is(:hover, :focus-within)')
    })
  ]
}
