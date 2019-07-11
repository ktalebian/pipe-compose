module.exports = {
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  testMatch: [
    '<rootDir>/src/**/*.spec.ts'
  ]
};
