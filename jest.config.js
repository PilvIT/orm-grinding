module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["node_modules/", "coverage/"],
  coverageProvider: "v8",
};
