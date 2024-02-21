import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import stylelint from 'vite-plugin-stylelint';
import StyleLintFormatterPretty from 'stylelint-formatter-pretty';

import eslint from 'vite-plugin-eslint';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const developmentPlugins = [
    
    {
      ...stylelint({
        fix: true,
        formatter: StyleLintFormatterPretty,
      }),
      enforce: 'pre',
    },
  ];

  const plugins = {
    development: developmentPlugins,
  }.development || [];

  return {
    plugins: [
      ...plugins,
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('swiper-'),
          },
        },
      }),
    ],
    server: {
      port: 9000,
      hmr: {
        overlay: false,
      },
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
      extensions: ['*', '.vue', '.js', '.ts', '.json', '.scss', 'mjs'],
    },
  };
});
