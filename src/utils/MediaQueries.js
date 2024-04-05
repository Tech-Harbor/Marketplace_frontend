const size = {
  mobile: 360,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
};

const device = {
  beforeLaptop: `(max-width: ${size.laptop - 0.02}px)`,
  beforeTablet: `(max-width: ${size.tablet - 0.02}px)`,
  mobile: `(min-width: ${size.mobile}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};

export { device };
