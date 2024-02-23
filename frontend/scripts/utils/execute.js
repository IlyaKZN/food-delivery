const { spawn } = require('child_process');

async function execute(command) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, {
      shell: true,
      stdio: 'inherit',
    });

    child.on('error', reject);
    child.on('exit', (code) => (code === 0 ? resolve() : reject(code)));
  });
}

module.exports = execute;
