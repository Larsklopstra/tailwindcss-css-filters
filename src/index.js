const backdropFilters = require("./plugins/backdropFilters");
const filters = require("./plugins/filters");

module.exports = ({ addUtilities, theme, e }) => {
    backdropFilters({ addUtilities, theme, e });
    filters({ addUtilities, theme, e });
}
