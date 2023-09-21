db.inventory.deleteMany( { $or  : [ {item : "canvas"}, {'size.h' : 22.85}, {qty : 95 }  ] })
