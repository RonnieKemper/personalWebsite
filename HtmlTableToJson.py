from operator import index
from itertools import cycle
import os

s1 = "<"
s2 = "/"
rawSkills = []
skills = []
l1 = str('\n')
l2 = str('\n' + '\t')
l3 = str('\n' + '\t' + '\t')
l4 = str('\n' + '\t' + '\t' + '\t')
def trigger():
    #print([ipp for i in range(1)])
    numbers = []
    [numbers.append(i) for i in range(35)]
    for i in numbers:
        if x[ipp + 1] == "/":
            return
        try:
            rawSkills.append(''.join(x[ipp + i]))
        except:
            pass
ipp = 0
with open("skills.html", "r") as g:
    x = list(g.read()); #print(x)
    
    for i in x:
        ipp += 1
        c1 = 0 # i = 0
        if i == "<": 
            trigger(); 
        
    g.close()
    print(rawSkills); print([ipp for i in range(1)])
with open("skills.json", "w") as f:
    count = 0
    f.write("{" + l2 + '"' + "skills" + '"' + ":[")
    for i in skills:
        count += 1
        f.write(l3 + "{" + l4 + '"' + "id" + '"' + ": " + str(count) + ",")
        f.write(l4 + '"' + "skill" + '"' + ": " + i + l3 + "},")

    f.write(l2 + "]" + l1 + "}")
    f.close()
        

