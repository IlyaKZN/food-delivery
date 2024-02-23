const path = require('path');
const execute = require('./utils/execute.js');
const { getParams } = require('./utils/argvParser.js');

const params = getParams();
const mode = params.mode || 'production';

const concurrently = path.resolve('./node_modules/.bin/concurrently');

const concurrentlyColor = {
  production: '#0097a7.bold',
  development: '#0097a7.bold',
  debug: '#f57f17.bold',
  analyze: '#63f2f1.bold',
}[mode] || 'white.bold';

const vite = path.resolve('./node_modules/.bin/vite');

const viteMode = {
  development: 'development',
  debug: 'debug',
  analyze: 'analyze',
}[mode] || 'production';

const viteWatch = {
  development: '--watch',
  analyze: '--watch',
}[mode] || '';

async function build() {
  try {
    await execute(`${concurrently} -n "${mode}" -c "${concurrentlyColor}" "${vite} build --mode ${viteMode} ${viteWatch}"`);
  } catch (code) {
    console.log(`build exited with code ${code}`);
    process.exit(code);
  }
}

build();
