/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: {
        // allow js in typescript
        allowJs: true,
      },
    },
  },
  moduleNameMapper: {
    '@albanian-xrm/styled-switch/(.*)': '<rootDir>/StyledSwitch/$1'
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    // transform files with ts-jest
    "^.+\\.(jsx?|tsx?)$": "ts-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@mui/material|@babel)"
  ],
};