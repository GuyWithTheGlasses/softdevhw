#Write fib(n) employing dynamic programming

#Returns the nth fibonacci number
def memoize(f):
    memo = {} #hashmap/dict for O(1) lookup
    def inner(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return inner

@memoize
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)


#print testing
for x in range(10):
    print fib(x)


        
