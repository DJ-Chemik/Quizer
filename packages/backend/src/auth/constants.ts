export const jwtConstants = {
  secret: process.env.JWT_SECRET,
  // eslint-disable-next-line no-magic-numbers
  expiresIn: `${1 * 60}s`,
};
