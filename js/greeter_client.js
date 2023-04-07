const PROTO_PATH = __dirname + '/proto/greeter.proto';

const parseArgs = require('minimist');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
  const argv = parseArgs(process.argv.slice(2), {
    string: 'target',
  });
  let target;
  if (argv.target) {
    target = argv.target;
  } else {
    target = 'localhost:6060';
  }
  const client = new hello_proto.Greeter(
    target,
    grpc.credentials.createInsecure()
  );
  let user;
  if (argv._.length > 0) {
    user = argv._[0];
  } else {
    user = 'world';
  }
  client.sayHello({ name: user }, function (err, response) {
    console.log('Greeting:', response?.message);
  });
}

main();
