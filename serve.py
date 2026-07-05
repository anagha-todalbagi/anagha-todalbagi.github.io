import os
import http.server
import socketserver

ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("127.0.0.1", 4173), Handler) as httpd:
    print("serving on http://127.0.0.1:4173")
    httpd.serve_forever()
