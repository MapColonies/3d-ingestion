module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  coverageReporters: ['text', 'html'],
  coverageDirectory: '<rootDir>/coverage',
  rootDir: '../../../.',
  testMatch: ['<rootDir>/tests/integration/**/*.spec.ts'],
  setupFiles: ['<rootDir>/tests/configurations/jest.setup.js'],
  globalTeardown: '<rootDir>/tests/configurations/integration/jest.teardown.js',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      { multipleReportsUnitePath: './report', pageTitle: 'integration', publicPath: './reports', filename: 'integration.html' },
    ],
  ],
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!**/node_modules/**', '!**/vendor/**', '!*/common/**', '!<rootDir>/src/*'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
