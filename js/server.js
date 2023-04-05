const grpc = require('@grpc/grpc-js');
const messages = require('./proto/greeter_pb');
const services = require('./proto/greeter_grpc_pb');

function sayHello(call, callback) {
  const reply = new messages.HelloReply();
  reply.setMessage('Hello ' + call.request.getName());
  callback(null, reply);
}

function server() {
  const server = new grpc.Server();

  server.addService(services.GreeterService, { sayHello: sayHello });

  server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
    }
  );
}

server();
