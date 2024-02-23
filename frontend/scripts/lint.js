const path = require('path');
const execute = require('./utils/execute.js');
const { getArgvString } = require('./utils/argvParser.js');

const concurrently = path.resolve('./node_modules/.bin/concurrently');
const eslint = path.resolve('./node_modules/.bin/eslint');
const stylelint = path.resolve('./node_modules/.bin/stylelint');

async function lint() {
  try {
    await execute(`${concurrently} -n "eslint,stylelint" -c "#2a28d8.bold,#80299e.bold" "${eslint} src --ext .js,.vue --format pretty ${getArgvString()}" "${stylelint} \\"src/**/*.{vue,scss}\\" ${getArgvString()}"`);
  } catch (code) {
    console.log(`lint exited with code ${code}`);
    process.exit(code);
  }
}

lint();
