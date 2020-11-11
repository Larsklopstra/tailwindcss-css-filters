![Tailwind CSS Filters](/docs/logo.svg)

# Tailwind CSS Filters

Traduções

- [Inglês](../README.md)

Tailwind CSS Filters são filtos expressivos de CSS para o framework 'utility-first' [Tailwind CSS](https://tailwindcss.com).

```html
<div class="filter filter-blur-2 filter-hue-rotate-90 sm:filter-blur-8">
  Alguns filtros bacanas
</div>
```

[Visualizar demonstração](https://play.tailwindcss.com/KVnMFYYpLL)

## Instalação

Instale o plugin usando npm:

```bash
# Using npm
npm i --save-dev tailwindcss-css-filters

# Using yarn
yarn add -D tailwindcss-css-filters
```

Depois adicione o plugin para o seu arquivo de configuração do Tailwind `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      hueRotate: {
        8: '8deg',
      },
    },
  },
  plugins: [
    require('tailwindcss-css-filters'),
  ],
}
```

## Uso

Agora você pode usar as classes `filter` para adicionar filtros em seus elementos HTML e imagens.

## Classes Padrões

```css
.filter
.filter-blur-2
.filter-blur-4
.filter-blur-8
.filter-blur-16
.filter-blur-32
.filter-blur-64

.hover\:filter-blur-2:hover
.hover\:filter-blur-4:hover
.hover\:filter-blur-8:hover
.hover\:filter-blur-16:hover
.hover\:filter-blur-32:hover
.hover\:filter-blur-64:hover
.focus\:filter-blur-2:focus
.focus\:filter-blur-4:focus
.focus\:filter-blur-8:focus
.focus\:filter-blur-16:focus
.focus\:filter-blur-32:focus
.focus\:filter-blur-64:focus

.filter-brightness-0
.filter-brightness-25
.filter-brightness-50
.filter-brightness-75
.filter-brightness-100
.hover\:filter-brightness-0:hover
.hover\:filter-brightness-25:hover
.hover\:filter-brightness-50:hover
.hover\:filter-brightness-75:hover
.hover\:filter-brightness-100:hover
.focus\:filter-brightness-0:focus
.focus\:filter-brightness-25:focus
.focus\:filter-brightness-50:focus
.focus\:filter-brightness-75:focus
.focus\:filter-brightness-100:focus

.filter-contrast-0
.filter-contrast-25
.filter-contrast-50
.filter-contrast-75
.filter-contrast-100
.hover\:filter-contrast-0:hover
.hover\:filter-contrast-25:hover
.hover\:filter-contrast-50:hover
.hover\:filter-contrast-75:hover
.hover\:filter-contrast-100:hover
.focus\:filter-contrast-0:focus
.focus\:filter-contrast-25:focus
.focus\:filter-contrast-50:focus
.focus\:filter-contrast-75:focus
.focus\:filter-contrast-100:focus

.filter-drop-shadow-sm
.filter-drop-shadow
.filter-drop-shadow-md
.filter-drop-shadow-lg
.filter-drop-shadow-xl
.filter-drop-shadow-2xl
.hover\:filter-drop-shadow-sm:hover
.hover\:filter-drop-shadow:hover
.hover\:filter-drop-shadow-md:hover
.hover\:filter-drop-shadow-lg:hover
.hover\:filter-drop-shadow-xl:hover
.hover\:filter-drop-shadow-2xl:hover
.focus\:filter-drop-shadow-sm:focus
.focus\:filter-drop-shadow:focus
.focus\:filter-drop-shadow-md:focus
.focus\:filter-drop-shadow-lg:focus
.focus\:filter-drop-shadow-xl:focus
.focus\:filter-drop-shadow-2xl:focus

.filter-grayscale-0
.filter-grayscale-25
.filter-grayscale-50
.filter-grayscale-75
.filter-grayscale-100
.hover\:filter-grayscale-0:hover
.hover\:filter-grayscale-25:hover
.hover\:filter-grayscale-50:hover
.hover\:filter-grayscale-75:hover
.hover\:filter-grayscale-100:hover
.focus\:filter-grayscale-0:focus
.focus\:filter-grayscale-25:focus
.focus\:filter-grayscale-50:focus
.focus\:filter-grayscale-75:focus
.focus\:filter-grayscale-100:focus

.filter-hue-rotate-0
.filter-hue-rotate-60
.filter-hue-rotate-90
.filter-hue-rotate-120
.filter-hue-rotate-150
.filter-hue-rotate-180
.filter-hue-rotate-210
.filter-hue-rotate-240
.filter-hue-rotate-270
.filter-hue-rotate-300
.filter-hue-rotate-330
.hover\:filter-hue-rotate-0:hover
.hover\:filter-hue-rotate-60:hover
.hover\:filter-hue-rotate-90:hover
.hover\:filter-hue-rotate-120:hover
.hover\:filter-hue-rotate-150:hover
.hover\:filter-hue-rotate-180:hover
.hover\:filter-hue-rotate-210:hover
.hover\:filter-hue-rotate-240:hover
.hover\:filter-hue-rotate-270:hover
.hover\:filter-hue-rotate-300:hover
.hover\:filter-hue-rotate-330:hover
.focus\:filter-hue-rotate-0:focus
.focus\:filter-hue-rotate-60:focus
.focus\:filter-hue-rotate-90:focus
.focus\:filter-hue-rotate-120:focus
.focus\:filter-hue-rotate-150:focus
.focus\:filter-hue-rotate-180:focus
.focus\:filter-hue-rotate-210:focus
.focus\:filter-hue-rotate-240:focus
.focus\:filter-hue-rotate-270:focus
.focus\:filter-hue-rotate-300:focus
.focus\:filter-hue-rotate-330:focus

.filter-invert-0
.filter-invert-25
.filter-invert-50
.filter-invert-75
.filter-invert-100
.hover\:filter-invert-0:hover
.hover\:filter-invert-25:hover
.hover\:filter-invert-50:hover
.hover\:filter-invert-75:hover
.hover\:filter-invert-100:hover
.focus\:filter-invert-0:focus
.focus\:filter-invert-25:focus
.focus\:filter-invert-50:focus
.focus\:filter-invert-75:focus
.focus\:filter-invert-100:focus

.filter-saturate-0
.filter-saturate-25
.filter-saturate-50
.filter-saturate-75
.filter-saturate-100
.filter-saturate-125
.filter-saturate-150
.filter-saturate-175
.filter-saturate-200
.hover\:filter-saturate-0:hover
.hover\:filter-saturate-25:hover
.hover\:filter-saturate-50:hover
.hover\:filter-saturate-75:hover
.hover\:filter-saturate-100:hover
.hover\:filter-saturate-125:hover
.hover\:filter-saturate-150:hover
.hover\:filter-saturate-175:hover
.hover\:filter-saturate-200:hover
.focus\:filter-saturate-0:focus
.focus\:filter-saturate-25:focus
.focus\:filter-saturate-50:focus
.focus\:filter-saturate-75:focus
.focus\:filter-saturate-100:focus
.focus\:filter-saturate-125:focus
.focus\:filter-saturate-150:focus
.focus\:filter-saturate-175:focus
.focus\:filter-saturate-200:focus

.filter-sepia-0
.filter-sepia-25
.filter-sepia-50
.filter-sepia-75
.filter-sepia-100
.filter-sepia-125
.filter-sepia-150
.filter-sepia-175
.filter-sepia-200
.hover\:filter-sepia-0:hover
.hover\:filter-sepia-25:hover
.hover\:filter-sepia-50:hover
.hover\:filter-sepia-75:hover
.hover\:filter-sepia-100:hover
.hover\:filter-sepia-125:hover
.hover\:filter-sepia-150:hover
.hover\:filter-sepia-175:hover
.hover\:filter-sepia-200:hover
.focus\:filter-sepia-0:focus
.focus\:filter-sepia-25:focus
.focus\:filter-sepia-50:focus
.focus\:filter-sepia-75:focus
.focus\:filter-sepia-100:focus
.focus\:filter-sepia-125:focus
.focus\:filter-sepia-150:focus
.focus\:filter-sepia-175:focus
.focus\:filter-sepia-200:focus
```

## Customização

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
