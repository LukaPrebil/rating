const defaultOptions = { max: 5, symbolSuccess: "★", symbolFail: "☆" };
export const rating = (n, options = {}) => {
  const { max, symbolSuccess, symbolFail } = { ...defaultOptions, ...options };
  return (symbolSuccess.repeat(max) + symbolFail.repeat(max)).slice(
    max - n,
    2 * max - n
  );
};
