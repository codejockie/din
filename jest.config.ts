import type { Config } from "jest";

const config: Config = {
  verbose: true,
  projects: [
    {
      preset: "ts-jest",
      testEnvironment: "node",
      displayName: "calendar",
      // setupFilesAfterEnv: ["./jest.setup.ts"],
      testMatch: ["<rootDir>/packages/src/date-picker/**/?(*.)+(spec).ts?(x)"],
    },
  ],
};

export default config;
