import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './'
});

const customJestConfig = {
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@service/(.*)': '<rootDir>/src/services/$1'
  },
  testEnvironment: 'jest-environment-jsdom'
};

export default createJestConfig(customJestConfig);
