export const jwtConstants = {
  secret: process.env.JWT_SECRET,
  // eslint-disable-next-line no-magic-numbers
  accessTokenExpiresIn: `${1 * 60}s`,
  // eslint-disable-next-line no-magic-numbers
  refreshTokenExpiresIn: `${10 * 60}s`,
};

export const bcryptConstants = {
  numberOfRounds: 10,
};
