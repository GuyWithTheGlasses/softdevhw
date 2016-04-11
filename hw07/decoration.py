#Decoration Day: 4/5/16

def inc(x):
    return x+1

def dec(x):
    return x-1

f = inc
print f(5) #should print 6

flist = [inc,dec]
print flist[1](5) #should print 4


#--------------------------------------------------------------------------#

#A simple closure in Python

def makeAdder(n):
    def inner(x):
        return x+n
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)

print add3(10) #should be 13
print add5(10) #should be 15


#--------------------------------------------------------------------------#

#A clunky approach to class type abstraction
#Simulate a class definition using inner functions

def make_counter():
    #private "instance" data
    #python scoping rules necessiate list
    count = [0]

    def inc():
        count[0] = count[0]+1
    def dec():
        count[0] = count[0]-1
    def reset():
        count[0] = 0
    def get():
        return count[0]

    return {'inc':inc, 'dec':dec, 'reset':reset, 'get':get}

#Instantiate counters

c1 = make_counter()
c2 = make_counter()

c1['inc']()
c1['inc']()
c1['inc']()
print c1['get']() #should be 3

c2['inc']()
print c2['get']() #should be 1

c1['reset']()
print c1['get']() #should be 0
