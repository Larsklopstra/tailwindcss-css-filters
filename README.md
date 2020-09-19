![Tailwind CSS Filters](/docs/logo.svg)

# Tailwind CSS Filters

This is a Tailwind CSS package which allows you to use CSS filters.

## Usage

Install the package

```bash
npm i --save-dev tailwindcss-css-filters
```

```js
module.exports = {
  theme: {
    extend: {
      hueRotate: {
        8: '8deg',
      },
    },
  },
  plugins: [require('tailwindcss-css-filters')],
}
```

```html
<div class="filter filter-blur-2 filter-hue-rotate-90 sm:filter-blur-8">
  Filters
</div>
```

## Default values and available filters

```js
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
```
