from flask import Flask, render_template,request
import time, json, readfile
from functools import wraps

app = Flask(__name__)

#The meat of today's work

def timer(fn):
    @wraps(fn)
    def inner(*args):
        start = time.time()
        retval = fn()
        print str(time.time() - start)
        return fn()
    return inner

def get_func(fn):
    @wraps(fn)
    def inner(*args):
        print fn.func_name + str(args)
        return fn()
    return inner

#Prints the name and time it took to run a function

@app.route("/")
@get_func
@timer
def index():
    return render_template("index.html")

@app.route("/search")
@get_func
@timer
def search():
    name = request.args.get("name")
    profile = readfile.searchprofile(name)
    return json.dumps(profile)

@app.route("/random")
@get_func
@timer
def random():
    profile = readfile.randomprofile()
    return json.dumps(profile)
    
if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
