import * as path from "path";
import { Config } from "bili";

const config: Config = {
  plugins: {
    typescript2: {
      cacheRoot: path.join(__dirname, ".rpt2_cache"),
      // Override the config in `tsconfig.json`
      tsconfigOverride: {
        include: ["src"],
      },
      useTsconfigDeclarationDir: true,
    },
  },

  input: "src/index.ts",
  output: {
    format: ["cjs", "esm"],
    moduleName: "Package",
    minify: true,
    dir: "./dist",
  },
};

export default config;
