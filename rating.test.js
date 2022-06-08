import { rating } from "./rating";

describe(`${rating.name} tests`, () => {
  test.each([0, 1, 2, 3, 4, 5])(
    "rating(%i) should return correct string",
    (n) => {
      expect(rating(n)).toMatchSnapshot();
    }
  );
});
