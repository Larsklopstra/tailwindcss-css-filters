const availableFilters = require('../availableFilters')
const generateBase = require('../utils/generateBase')
const generateFilters = require('../utils/generateFilters')

module.exports = function ({ addUtilities, theme, e }) {
  generateBase({
    cssProperty: 'filter',
    name: 'filter',
    addUtilities,
  })

  generateFilters({
    prefix: 'filter',
    filters: availableFilters,
    addUtilities,
    theme,
    e,
  })
}
