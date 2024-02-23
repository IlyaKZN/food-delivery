const path = require('path');
const execute = require('../utils/execute.js');

async function jenkins() {
  try {
    await execute('npm ci');

    const concurrently = path.resolve('./node_modules/.bin/concurrently');
    const { getArgvString } = require('../utils/argvParser.js');

    await execute(`${concurrently} -n "locale" -c "#f2c563.bold" "npm:locale"`);
    await execute(`${concurrently} -n "build,build" -c "#259911.bold#259911.bold" "npm:build -- --mode production ${getArgvString()}" "npm:build -- --mode debug ${getArgvString()}"`);
  } catch (code) {
    console.log(`jenkins exited with code ${code}`);
    process.exit(code);
  }
}

jenkins();
