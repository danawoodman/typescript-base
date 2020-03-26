module.exports = {
  roots: ['<rootDir>/src'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'mjs', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
}
