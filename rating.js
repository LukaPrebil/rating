export const rating = (n, options = { max: 5 }) =>
  ("★".repeat(options.max) + "☆".repeat(options.max)).slice(
    options.max - n,
    2 * options.max - n
  );
