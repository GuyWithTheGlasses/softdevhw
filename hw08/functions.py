#4/7/16 Classwork

#Returns the union of lists a,b
#Denoted A u B
def union(a,b):
    return a + [x for x in b if x not in a]
    
l1 = [0,1,2,3,4,5,6,7,8]
l2 = [4,5,6,7,8,9,10,11,12]
print union(l1,l2)

#Returns the intersection of lists a,b
#Denoted A n B
def inter(a,b):
    return [x for x in a if x in b]

print inter(l1,l2)

#Returns all elements of a which are not a member of u
#Known as set difference (or complement if a is subset of u)
#Denoted U\A
def set_diff(a,u):
    return [x for x in a if x not in u]

print set_diff(l1,l2)

#Returns all elements which are a member of a or b, but not both
#Mathematically, this equals (A u B)\(A n B) or (A\B)u(B\A)
def sym_diff(a,b):
    return set_diff(union(a,b),inter(a,b))

print sym_diff(l1,l2)

#Returns all possible ordered pairs that can be created from a and b
#Known as the Cartesian product
#Denoted A x B
def cart_product(a,b):
    return [(x,y) for x in a for y in b]

print cart_product(l1,l2)
