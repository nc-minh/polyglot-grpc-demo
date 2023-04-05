// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_greeter_pb = require('../protos/greeter_pb.js');

function serialize_pb_HelloReply(arg) {
  if (!(arg instanceof protos_greeter_pb.HelloReply)) {
    throw new Error('Expected argument of type pb.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_HelloReply(buffer_arg) {
  return protos_greeter_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_HelloRequest(arg) {
  if (!(arg instanceof protos_greeter_pb.HelloRequest)) {
    throw new Error('Expected argument of type pb.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_HelloRequest(buffer_arg) {
  return protos_greeter_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var GreeterService = exports.GreeterService = {
  // Sends a greeting
sayHello: {
    path: '/pb.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: protos_greeter_pb.HelloRequest,
    responseType: protos_greeter_pb.HelloReply,
    requestSerialize: serialize_pb_HelloRequest,
    requestDeserialize: deserialize_pb_HelloRequest,
    responseSerialize: serialize_pb_HelloReply,
    responseDeserialize: deserialize_pb_HelloReply,
  },
  // Sends another greeting
sayHelloAgain: {
    path: '/pb.Greeter/SayHelloAgain',
    requestStream: false,
    responseStream: false,
    requestType: protos_greeter_pb.HelloRequest,
    responseType: protos_greeter_pb.HelloReply,
    requestSerialize: serialize_pb_HelloRequest,
    requestDeserialize: deserialize_pb_HelloRequest,
    responseSerialize: serialize_pb_HelloReply,
    responseDeserialize: deserialize_pb_HelloReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
