proto:
	rm -f pb/*.py
	python3 -m grpc_tools.protoc -I protos --python_out=. --grpc_python_out=. ./protos/greeter.proto
server-py:
	python3 greeter_server.py

.PHONY: proto server-py
