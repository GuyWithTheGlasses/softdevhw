#4/8/16 Classwork

import time, qsort

#1. Make a function that logs the runtime of another function
def runtime(f):
    def inner(arg):
        start = time.time()
        f(arg)
        end = time.time()
        print "execution time: "+str(end-start)
    return inner
    
array = [20,51,100,14,5,76,1,22,34,29,11,5,6,1,4,6,6,3,63,5345,3445,3,534,53,53,4534,5,35,34,534,5,345,345,34534,65]
closure = runtime(qsort.qsort)

closure(array)

#---------------------------------------------------------------------------#
#Idk what is happening here doesn't quite work
#2. Write a function that outputs another function's name and arguments 

def get_function(fn):
    def inner(*args):
        print fn.func_name, args
        return fn(*args)
    return inner
        
#Copied from hw08 
@get_function
def set_diff(a,u):
    return [x for x in a if x not in u]

l1 = [0,1,2,3,4,5,6,7,8]
l2 = [4,5,6,7,8,9,10,11,12]
#print set_diff(l1,l2)

#---------------------------------------------------------------------------#
#a simple example of applying multiple decorators
def make_bold(fn):
    print fn()
    return lambda : "<b>" + fn() + "</b>"

def make_italic(fn):
    print fn()
    return lambda : "<i>" + fn() + "</i>"
def make_underline(fn):
    print fn()
    return lambda : "<u>" + fn() + "</u>"

@make_bold
@make_italic
@make_underline
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML
