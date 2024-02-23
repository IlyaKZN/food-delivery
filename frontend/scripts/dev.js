const path = require('path');
const execute = require('./utils/execute.js');
const { getArgvString } = require('./utils/argvParser.js');

const concurrently = path.resolve('./node_modules/.bin/concurrently');
const vite = path.resolve('./node_modules/.bin/vite');

async function dev() {
  try {
    await execute(`${concurrently} -n "dev" -c "#0097a7.bold" "${vite} --config ${path.resolve(__dirname, '../vite.config.ts')} ${getArgvString()}"`);
  } catch (code) {
    console.log(`dev exited with code ${code}`);
    process.exit(code);
  }
}

dev();
