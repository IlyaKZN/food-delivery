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
      ...eslint({
        include: '**/*.+(vue|js|ts)',
        extensions: ['js', 'vue', 'ts'],
        cache: true,
        fix: true,
      }),
      enforce: 'pre',
    },
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
      vue(),
    ],
    server: {
      port: 9000,
      hmr: {
        overlay: false,
      },
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
