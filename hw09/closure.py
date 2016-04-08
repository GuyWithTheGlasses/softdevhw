import time

#1. Make a function that logs the runtime of another function
def runtime(f):
    def inner(arg):
        start = time.time()
        f(arg)
        end = time.time()
        print "execution time: "+str(end-start)
    return inner

#Taking qsort from hw07 for testing purposes 
def qsort(a):
    #Quicksorts an array a
    if(len(a) <= 1):
        return a
    pivot = a[0]
    small = [x for x in a if x < pivot]
    big = [x for x in a if x > pivot]
    return qsort(small) + [pivot] + qsort(big)

array = [20,51,100,14,5,76,1,22,34,29,11,5,6,1,4,6,6,3,63,5345,3445,3,534,53,53,4534,5,35,34,534,5,345,345,34534,65]
closure = runtime(qsort)
closure(array)

#---------------------------------------------------------------------------#
#Idk what is happening here
#2. Write a function that outputs another function's name and arguments 

def get_function(fn):
    args = fn.__code__.co_varnames
    retS = ""
    for i in range(len(args)-1):
        retS = retS + args[i] + ", "
    retS = retS + args[len(args)-1]
    
    return lambda: fn.func_name + "(" + retS + ")"
        
#Copied from hw08 
@get_function
def set_diff(a,u):
    return [x for x in a if x not in u]

l1 = [0,1,2,3,4,5,6,7,8]
l2 = [4,5,6,7,8,9,10,11,12]
print set_diff(l1,l2)
