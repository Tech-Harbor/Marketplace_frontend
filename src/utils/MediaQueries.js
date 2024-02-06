const size = {
  mobileS: '360px',
  onlyMobileS: '1023px',
  laptop: '1024px',
  laptopL: '1440px',
};

const device = {
  onlyMobileS: `(max-width: ${size.onlyMobileS})`,
  mobileS: `(min-width: ${size.mobileS})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
};

export { device };
