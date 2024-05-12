const data = `{
        name
        price
        location
        images {
          imageUrl
        }`;

export const REQUESTS_FOR_PRODUCT_DATA = [
  { id: 1 },
  {
    id: 2,
    title: 'Найновіші',
    request: `
    query {
      getAllAdvertisement ${data}
      }
    }
  `,
  },
  {
    id: 3,
    title: 'VIP Оголошення',
    request: `
    query {
      getAllAdvertisement ${data}
      }
    }
  `,
  },
  { id: 4 },
  {
    id: 5,
    title: 'VIP Оголошення',
    request: `
    query {
      getAllAdvertisement ${data}
      }
    }
  `,
  },
];
