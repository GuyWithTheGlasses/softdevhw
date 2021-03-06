#Quicksort algorithm
#1. Pick a pivot element
#2. Partition the array around the pivot, moving all the elements less than
#the pivot to one side, and all the elements great to the other
#3. Recursively qsort the two resulting arrays

import random

def qsort(a):
    #Quicksorts an array a

    if(len(a) <= 1):
        return a
    pivot = random.choice(a)
    small = [x for x in a if x < pivot]
    big = [x for x in a if x > pivot]
    return qsort(small) + [x for x in a if x==pivot] + qsort(big)

array = [20,20,20,20,51,100,14,5,76,1,22,34,29,11]
print qsort(array)
