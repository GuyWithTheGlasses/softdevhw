#Examples 'n Stuff

nums = []
for x in range(8):
    nums.append(x)

squares = []
for x in range(8):
    squares.append(x**2)

print [x for x in range(8)]
print [x*x for x in range(8)]
print [(x, x*x, x*x*x) for x in range(8)]

p = "myNoobPass1234"

string1 = [x for x in p]
print string1
string2 = [x for x in "1234"]
print string2

"""
print [x for x in p if x in UC_LETTERS]
print [1 for x in p if x in UC_LETTERS]
print [1 if x in UC_LETTERS else 0 for x in p]
"""
#--------------------------- The Homework -----------------------------#

#Useful variables
UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS="abcdefghijklmnopqrstuvwxyz"
NUMBERS="0123456789"

#Check whether password meets a minimum threshold:
#Contains mixture of upper and lowercase letters, and at least 1 number
def pass_check(pw):
    ucase = [1 if x in UC_LETTERS else 0 for x in pw] 
    lcase = [1 if x in LC_LETTERS else 0 for x in pw]
    number = [1 if x in NUMBERS else 0 for x in pw]
    return sum(ucase) > 0 and sum(lcase) > 0 and sum(number) > 0

print pass_check("asdf")
print pass_check("Hey1tsm3")

#Return a password's strength rating, integer scale of 1-10
#Rating depends on use of numbers, ucase, lcase, and non-alphanumeric chars
