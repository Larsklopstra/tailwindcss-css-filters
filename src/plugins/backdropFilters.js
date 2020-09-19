const availableFilters = require('../availableFilters')
const generateBase = require('../utils/generateBase')
const generateFilters = require('../utils/generateFilters')

module.exports = function ({ addUtilities, theme, e }) {
  generateBase({
    cssProperty: 'backdrop-filter',
    name: 'bdf',
    addUtilities,
  })

  generateFilters({
    prefix: 'bdf',
    filters: availableFilters,
    addUtilities,
    theme,
    e,
  })
}
