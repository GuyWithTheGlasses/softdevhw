#4/6/16 Classwork

def pt(n):
    #Returns a list of the pythagorean triples on interval 1 to n
    retL = []
    for a in range(1,n):
        for b in range(a+1,n):
            for c in range(b+1,n):
                if (a*a + b*b == c*c): 
                    retL.append([a,b,c])
    return retL

#print pt(8)

def pt2(n):
    #Does pythagorean triples thing with list comphrehensions
    return [(a,b,c)
            for a in range(1,n)
            for b in range(a+1,n)
            for c in range(b+1,n)
            if a*a + b*b == c*c]

print pt2(15)

#def pt3(n):
    
