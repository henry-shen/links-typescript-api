module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/services/**/index.ts', '!<rootDir>/src/infra/**/*.ts', '!<rootDir>/src/*.ts', '!<rootDir>/src/lib/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text-summary',
    'lcov'
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/src/config/', 'build'],
  testPathIgnorePatterns: ['src/config/*', '/node_modules/', '<rootDir>/build/'],
  testMatch: [
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ]
}
