from concurrent import futures
import logging

import grpc
import greeter_pb2_grpc
import greeter_pb2


class Greeter(greeter_pb2_grpc.GreeterServicer):

    def SayHello(self, request, context):
        print("Name", request.name)
        return greeter_pb2.HelloReply(message='Hello, %s!' % request.name)


def serve():
    port = '50051'
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    greeter_pb2_grpc.add_GreeterServicer_to_server(Greeter(), server)
    server.add_insecure_port('[::]:' + port)
    server.start()
    print("Server started, listening on " + port)
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
