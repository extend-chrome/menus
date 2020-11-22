module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
    },
  },
  setupFilesAfterEnv: ['./tests/jest.setup.ts'],
}
