const parseArgs = require('minimist');
const messages = require('./proto/greeter_pb');
const services = require('./proto/greeter_grpc_pb');

const grpc = require('@grpc/grpc-js');

function main() {
  const argv = parseArgs(process.argv.slice(2), {
    string: 'target',
  });
  var target;
  if (argv.target) {
    target = argv.target;
  } else {
    target = 'localhost:50051';
  }

  const client = new services.GreeterClient(
    target,
    grpc.credentials.createInsecure()
  );

  const request = new messages.HelloRequest();
  var user;
  if (argv._.length > 0) {
    user = argv._[0];
  } else {
    user = 'world';
  }
  request.setName(user);
  client.sayHello(request, function (err, response) {
    console.log('Greeting:', response.getMessage());
  });
}

main();
