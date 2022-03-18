module.exports = {
  // Test Environment
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // Mocking Static Assets
  clearMocks: true,
  // Coverage
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "node_modules/",
    "coverage/",
    "styles/",
    "stories/",
    "pages/",
    "public/",
    ".stories.tsx",
    ".next/",
    ".storybook/",
    "emptyFn.ts",
    "<rootDir>/tests/",
    "<rootDir>/translations/",
  ],
  coverageProvider: "v8",
  // Global Settings
  globals: {
    "ts-jest": {
      // NextJs uses "jsx: preserve" doesn't work with "jest"
      tsconfig: "<rootDir>/tests/tsconfig.test.json",
    },
  },
  modulePathIgnorePatterns: ["<rootDir>/cypress/"],
};
