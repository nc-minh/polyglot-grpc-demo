const PROTO_PATH = __dirname + '/proto/greeter.proto';

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const greeter_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function sayHello(call, callback) {
  console.log(`Received request: ${call.request.name}`);
  callback(null, { message: 'Hello ' + call.request.name });
}

function main() {
  const server = new grpc.Server();
  server.addService(greeter_proto.Greeter.service, { sayHello: sayHello });
  server.bindAsync(
    '0.0.0.0:5050',
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log('Server running at http://localhost:5050');
      server.start();
    }
  );
}

main();
