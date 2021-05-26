import { getQueryString, getShowFields } from '../utils';

describe('api/utils', () => {
  describe('getQueryString', () => {
    const specs = [
      {
        input: {
          'page-size': 15,
          'show-fields': 'headline',
          'order-by': 'oldest',
          'api-key': 'ApiKey',
        },
        output: 'api-key=ApiKey&order-by=oldest&page-size=15&show-fields=headline',
      },
      {
        input: {
          'page-size': 10,
          'q': 'art',
          'show-elements': 'all',
          'api-key': 'ApiKey',
        },
        output: 'api-key=ApiKey&page-size=10&q=art&show-elements=all',
      },
    ];
    specs.forEach(({ input, output }, index) => {
      it(`should return correct query string given the query object ${index}`, () => {
        expect(getQueryString(input)).toBe(output);
      });
    });
  });

  describe('getShowFields', () => {
    const specs = [
      {
        input: [],
        output: 'headline,thumbnail',
      },
      {
        input: ['body'],
        output: 'headline,thumbnail,body',
      },
    ];
    specs.forEach(({ input, output }, index) => {
      it(`should return correct show-fields string for the additional fields ${index}`, () => {
        expect(getShowFields(input)).toBe(output);
      });
    });
  });
});
