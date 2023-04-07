from concurrent import futures
import logging

import grpc
import greeter_pb2_grpc
import greeter_pb2
import imgkit


def gen_img_from_html():
    options = {
        'encoding': "UTF-8",
    }

    imgkit.from_file('source.html', 'out.jpg', options=options)
    print("Starting to generate image from html")


class Greeter(greeter_pb2_grpc.GreeterServicer):

    def SayHello(self, request, context):
        print("Name", request.name)
        gen_img_from_html()
        return greeter_pb2.HelloReply(message='Hello, %s!' % request.name)


def serve():
    port = '6060'
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    greeter_pb2_grpc.add_GreeterServicer_to_server(Greeter(), server)
    server.add_insecure_port('[::]:' + port)
    server.start()
    print("Server started, listening on " + port)
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
