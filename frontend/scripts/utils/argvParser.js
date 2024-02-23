const minimist = require('minimist');

function getParams() {
  return minimist(process.argv.slice(2));
}

function getArgvString(params = process.argv.slice(2)) {
  return params.join(' ');
}

function getEnvString(params = minimist(process.argv.slice(2))) {
  const array = [];

  Object.keys(params).forEach((key) => {
    if (['_', 'mode'].includes(key)) return;

    array.push(`${key}=${params[key]}`);
  });

  return array.join(' ');
}

module.exports = {
  getParams,
  getArgvString,
  getEnvString,
};
