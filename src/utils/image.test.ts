import { normalisedSource } from './image';

it("returns undefined if source doesn't start with http", () => {
  expect(normalisedSource('')).toStrictEqual({ uri: undefined });
});

it('returns fast image object source if uri starts http', () => {
  expect(normalisedSource('http://example.com')).toStrictEqual({
    uri: 'http://example.com',
    priority: 'high',
  });
});
