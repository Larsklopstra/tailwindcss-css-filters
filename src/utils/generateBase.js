module.exports = ({ name, cssProperty, addUtilities }) => {
  addUtilities({
    [`.${name}`]: {
      [`--${name}-blur`]: '0',
      [`--${name}-brightness`]: '1',
      [`--${name}-contrast`]: '1',
      [`--${name}-drop-shadow`]: '0 0 0',
      [`--${name}-grayscale`]: '0',
      [`--${name}-hue-rotate`]: '0',
      [`--${name}-invert`]: '0',
      [`--${name}-saturate`]: '1',
      [`--${name}-sepia`]: '0',
      [cssProperty]: [
        `blur(var(--${name}-blur))`,
        `brightness(var(--${name}-brightness))`,
        `contrast(var(--${name}-contrast))`,
        `drop-shadow(var(--${name}-drop-shadow))`,
        `grayscale(var(--${name}-grayscale))`,
        `hue-rotate(var(--${name}-hue-rotate))`,
        `invert(var(--${name}-invert))`,
        `saturate(var(--${name}-saturate))`,
        `sepia(var(--${name}-sepia))`,
      ].join(' '),
    },
  })
}
