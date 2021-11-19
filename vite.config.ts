import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import commonjsExternals from "vite-plugin-commonjs-externals";
import builtins from "rollup-plugin-node-builtins";

const builtinsPlugin = {
  ...builtins({ crypto: true }),
  name: "rollup-plugin-node-builtins",
};

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["crypto", "fs"],
  },
  plugins: [
    react(),
    commonjsExternals({
      externals: ["crypto", "fs"],
    }),
    builtinsPlugin,
  ],
  build: { rollupOptions: { plugins: [builtinsPlugin] } },
});
