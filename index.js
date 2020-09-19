const plugin = require('tailwindcss/plugin')
const _ = require('lodash')

module.exports = plugin(function ({ addUtilities, theme, e }) {
  const filtersBase = {
    '.filter': {
      '--filter-blur': '0',
      '--filter-brightness': '1',
      '--filter-contrast': '1',
      '--filter-drop-shadow': '0 0 0',
      '--filter-grayscale': '0',
      '--filter-hue-rotate': '0',
      '--filter-invert': '0',
      '--filter-saturate': '1',
      '--filter-sepia': '0',
      filter: [
        'blur(var(--filter-blur))',
        'brightness(var(--filter-brightness))',
        'contrast(var(--filter-contrast))',
        'drop-shadow(var(--filter-drop-shadow))',
        'grayscale(var(--filter-grayscale))',
        'hue-rotate(var(--filter-hue-rotate))',
        'invert(var(--filter-invert))',
        'saturate(var(--filter-saturate))',
        'sepia(var(--filter-sepia))',
      ].join(' '),
    },
  }

  addUtilities(filtersBase)

  const filters = [
    {
      name: 'blur',
      theme: {
        2: '2px',
        4: '4px',
        8: '8px',
        16: '16px',
        32: '32px',
        64: '64px',
      },
    },
    {
      name: 'brightness',
      theme: {
        0: '0',
        '1/4': '0.25',
        '1/2': '0.5',
        '3/4': '0.75',
        1: '1',
      },
    },
    {
      name: 'contrast',
      theme: {
        0: '0',
        '1/4': '0.25',
        '1/2': '0.5',
        '3/4': '0.75',
        1: '1',
      },
    },
    {
      name: 'dropShadow',
      theme: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        default: '0 1px 3px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
      },
    },
    {
      name: 'grayscale',
      theme: {
        0: '0%',
        '1/4': '0.25',
        '1/2': '0.5',
        '3/4': '0.75',
        1: '1',
      },
    },
    {
      name: 'hueRotate',
      theme: {
        0: '0deg',
        60: '60deg',
        90: '90deg',
        120: '120deg',
        150: '150deg',
        180: '180deg',
        210: '210deg',
        240: '240deg',
        270: '270deg',
        300: '300deg',
        330: '330deg',
      },
    },
  ]

  for (const filter of filters) {
    const filterTheme = _.merge(filter.theme, theme(filter.name))

    const generatedFilter = _.map(filterTheme, (value, key) => ({
      [key === 'default'
        ? `.filter-${_.kebabCase(filter.name)}`
        : `.filter-${_.kebabCase(filter.name)}-${e(key)}`]: {
        [`--filter-${_.kebabCase(filter.name)}`]: value,
      },
    }))

    addUtilities(generatedFilter, {
      variants: ['responsive', 'hover', 'focus'],
    })
  }
})
