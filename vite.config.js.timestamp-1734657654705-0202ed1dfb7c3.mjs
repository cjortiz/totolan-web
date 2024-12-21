// vite.config.js
import { defineConfig } from "file:///C:/Users/Owner/totolan-web/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Owner/totolan-web/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/Owner/totolan-web/node_modules/vite-plugin-svgr/dist/index.js";
import tsconfigPaths from "file:///C:/Users/Owner/totolan-web/node_modules/vite-tsconfig-paths/dist/index.js";
import legacy from "file:///C:/Users/Owner/totolan-web/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [legacy(), react(), tsconfigPaths(), svgr()],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
    // Ensure .tsx has precedence
  },
  build: {
    outDir: "build"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxPd25lclxcXFx0b3RvbGFuLXdlYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcT3duZXJcXFxcdG90b2xhbi13ZWJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL093bmVyL3RvdG9sYW4td2ViL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBzdmdyIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuaW1wb3J0IGxlZ2FjeSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tbGVnYWN5XCI7XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW2xlZ2FjeSgpLCByZWFjdCgpLCB0c2NvbmZpZ1BhdGhzKCksIHN2Z3IoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBleHRlbnNpb25zOiBbXCIudHN4XCIsIFwiLnRzXCIsIFwiLmpzeFwiLCBcIi5qc1wiXSwgLy8gRW5zdXJlIC50c3ggaGFzIHByZWNlZGVuY2VcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IFwiYnVpbGRcIixcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3USxTQUFTLG9CQUFvQjtBQUNyUyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sWUFBWTtBQUVuQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsT0FBTyxHQUFHLE1BQU0sR0FBRyxjQUFjLEdBQUcsS0FBSyxDQUFDO0FBQUEsRUFDcEQsU0FBUztBQUFBLElBQ1AsWUFBWSxDQUFDLFFBQVEsT0FBTyxRQUFRLEtBQUs7QUFBQTtBQUFBLEVBQzNDO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
