const size = {
  mobileS: '360px',
  laptop: '1024px',
  laptopL: '1440px',
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
};

export { device };
