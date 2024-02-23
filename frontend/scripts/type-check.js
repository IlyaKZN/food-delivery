const path = require('path');
const execute = require('./utils/execute.js');
const { getEnvString } = require('./utils/argvParser.js');

const vueTsc = path.resolve('./node_modules/.bin/vue-tsc');
const concurrently = path.resolve('./node_modules/.bin/concurrently');

async function typeCheck() {
  try {
    await execute(`${concurrently} -n "type-check" -c "#0097a7.bold" "${vueTsc} --noEmit ${getEnvString()}"`);
  } catch (code) {
    console.log(`dev exited with code ${code}`);
    process.exit(code);
  }
}

typeCheck();
