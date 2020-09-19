const _ = require('lodash')

module.exports = ({ addUtilities, theme, prefix, filters, e }) => {
  for (const filter of filters) {
    const filterTheme = _.merge(filter.theme, theme(filter.name))

    const generatedFilter = _.map(filterTheme, (value, key) => ({
      [key === 'default'
        ? `.${prefix}-${_.kebabCase(filter.name)}`
        : `.${prefix}-${_.kebabCase(filter.name)}-${e(key)}`]: {
        [`--${prefix}-${_.kebabCase(filter.name)}`]: value,
      },
    }))

    addUtilities(generatedFilter, {
      variants: ['responsive', 'hover', 'focus'],
    })
  }
}
