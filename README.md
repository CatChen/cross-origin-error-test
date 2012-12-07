# How to use?

Start two web servers on localhost:8000 and localhost:8008 with two directories respectively.

    localhost-8000-service > python -m SimpleHTTPServer
    localhost-8008-service > python -m SimpleHTTPServer 8000

Visit http://localhost:8000/test.html and see console logs.