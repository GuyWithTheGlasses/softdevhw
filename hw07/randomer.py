"""
import random

def get_name():
    names = ['tom','sue','harry','lisa','sarah','horatio']
    return random.choice(names)

print get_name()

#Is this a closure? (Answer: No)
def dble(f):
    name = f()
    return name+name

print dble(get_name())

#How about we do this instead

get_name = dble(get_name)
"""

import random

def doubler(f):
    def inner():
        name = f()
        return name+name
    return inner

#Not yet a function until @doubler is called

@doubler
#This is called a decorator
#A Python decorator encapsulates a closure and allows you
#to transparently wrap functionality
#decorator only works if you have an inner function
def get_name():
    names = ['tom','sue','harry','lisa','sarah','horatio']
    return random.choice(names)

print get_name()


    
