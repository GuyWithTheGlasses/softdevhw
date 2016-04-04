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
NON-ALPHANUM= "!@#&-:;',?/*" 

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
def pass_strength(pw):
    ucase = [1 if x in UC_LETTERS else 0 for x in pw] 
    lcase = [1 if x in LC_LETTERS else 0 for x in pw]
    number = [1 if x in NUMBERS else 0 for x in pw]
    batman = [1 if x in NON-ALPHANUM else 0 for x in pw]
    strength = 0

    if not pass_check(pw):
        return 1

    if sum(ucase) >= 4:
        strength += 4
    else:
        strength += sum(ucase)

    if sum(lcase) >= 4:
        strength += 4
    else:
        strength += sum(lcase)

    if sum(number) >= 1:
        strength += 1
    else:
        strength += sum(number)

    if sum(batman) >= 1:
        strength += 1
    else:
        strength += sum(batman)

    return strength

def strength_check(pw):
    l = [1 if x in UC_LETTERS else
         2 if x in LC_LETTERS else
         3 if x in NUMBERS else
         0 for x in p]
    return 1 in l and 2 in l and 3 in l

p1 = "password"
p2 = "passw0rd"
p3 = "Password"
p4 = "Passw0rd"

print p1 + ": " + str(strength_check(p1))
print p2 + ": " + str(strength_check(p2))
print p3 + ": " + str(strength_check(p3))
print p4 + ": " + str(strength_check(p4))

