var a = {n:1}
var b = a
a.n = 2
//2
b.n
//2
a = {n:3}

b.n
//2