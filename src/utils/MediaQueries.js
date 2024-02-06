const size = {
  mobileS: 360,
  laptop: 1024,
  laptopL: 1440,
};

const device = {
  onlyMobileS: `(max-width: calc(${size.laptop}px - 0.02px))`,
  mobileS: `(min-width: ${size.mobileS}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
};

export { device };
