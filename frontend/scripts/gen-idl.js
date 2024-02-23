const path = require('path');
const execute = require('./utils/execute.js');
const fs = require('fs');
const makeMessagesIsRequired = require('./utils/make-messages-is-required.js');

const concurrently = path.resolve('./node_modules/.bin/concurrently');

const tsProtoOptions = [
  'env=browser',
  'outputPartialMethods=false',
  'unrecognizedEnum=false',
  'outputServices=nice-grpc',
  'outputServices=generic-definitions',
  'outputJsonMethods=false',
  'useExactTypes=false',
  'oneof=unions',
  'esModuleInterop=true',
  'initializeFieldsAsUndefined=false',
];

const formattedTsProtoOptions = tsProtoOptions.join(',');

async function genIdl() {
  try {
    fs.rmSync('./src/idl/proto/gen', { recursive: true, force: true });
    // eslint-disable-next-line max-len, vue/max-len
    await execute(`${concurrently} -n "gen-idl" -c "#0097a7.bold" "mkdirp ./src/idl/proto/gen && grpc_tools_node_protoc --ts_proto_out=./src/idl/proto/gen --ts_proto_opt=${formattedTsProtoOptions} --proto_path=./src/idl/proto/source ./src/idl/proto/source/manager.proto"`);

    makeMessagesIsRequired(path.resolve(__dirname, '../src/idl/proto/gen/domain'));
  } catch (code) {
    console.log(`dev exited with code ${code}`);
    process.exit(code);
  }
}

genIdl();