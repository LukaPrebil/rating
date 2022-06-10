import { rating } from "./rating";

describe(`${rating.name} tests`, () => {
  test.each([0, 1, 2, 3, 4, 5])(
    "rating(%i) should return correct string",
    (n) => {
      expect(rating(n)).toMatchSnapshot();
    }
  );

  it("Should allow configured max value", () => {
    expect(rating(5, { max: 10 })).toMatchSnapshot();
  })

  it("Should allow configured success symbol", () => {
    expect(rating(2, { symbolSuccess: "x" })).toMatchSnapshot();
  })

  it("Should allow configured fail symbol", () => {
    expect(rating(3, { symbolFail: "o" })).toMatchSnapshot();
  })

  it("Should allow configured both symbols", () => {
    expect(rating(4, { symbolSuccess: "x", symbolFail: "o" })).toMatchSnapshot();
  })

  it("Should allow configured both symbols and max value", () => {
    expect(rating(5, { symbolSuccess: "x", symbolFail: "o", max: 10 })).toMatchSnapshot();
  })
});
