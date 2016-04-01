#------------------------------ The Classwork ------------------------------#

def inc(x):
    return x+1
f = inc
#print f(10)

def h(x):
    return lambda y: x + y
#print h(1)
#print h(2)
#print h(1)(3)
#print h(2)(5)
b = h(1)
#print b(5)

def f(x):
    def g(y):
        return x + y
    return g
#print f(1)
#print f(2)
#print f(1)(3)
#print f(2)(5)
a = f(1)
#print a(5)

#-------------------------------- The Task -------------------------------#

#Write a closure with outer function 'repeat'
#which repeats a string s, n times
def repeat(s):
    return lambda n: s*n

r1 = repeat("hello")
r2 = repeat("goodbye")

print r1(2)
print r2(2)
print repeat("cool")(3)
