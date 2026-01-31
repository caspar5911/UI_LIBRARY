// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,               // emit .d.ts
  outDir: 'dist',
  clean: true,
  bundle: true,         
  // Optional but recommended so file extensions match your package.json nicely
  outExtension({ format }) {
    return format === 'esm' ? { js: '.mjs' } : { js: '.cjs' };
  },

  external: [ // dont bundle these
    "react",
    "react-dom",
    "antd",
    "react/jsx-runtime"   // 👈 important for React 17+ new JSX transform
  ],
  // ✅ tell esbuild: ignore SCSS imports (do not try to parse them)
  esbuildOptions(options) {
    options.loader = {
      ...(options.loader ?? {}),
      '.scss': 'empty',
    };
  },
});