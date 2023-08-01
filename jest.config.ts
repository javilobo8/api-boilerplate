import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['<rootDir>/src/**/*.spec.ts', '<rootDir>/src/**/*.integration.ts'],
};

export default config;
