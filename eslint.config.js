// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Cho môi trường trình duyệt
        ...globals.node,   // Cho môi trường Node.js
        $: "readonly"      // Thêm $ nếu bạn sử dụng jQuery
      },
      ecmaVersion: 2021, // Hoặc phiên bản ES bạn đang sử dụng
      sourceType: "module"
    },
    rules: {
      // Thêm các quy tắc ESLint tùy chỉnh của bạn ở đây nếu cần
      // Ví dụ:
      // "no-unused-vars": "warn",
      // "no-console": "off",
    }
  },
  pluginJs.configs.recommended, // Các quy tắc khuyến nghị của ESLint
  pluginPrettierRecommended    // Tắt các quy tắc xung đột và chạy Prettier
];