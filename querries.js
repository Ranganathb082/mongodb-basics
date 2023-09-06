db.inventory.find() // - fetch all documents

db.inventory.find( { generes : ["Horror","Thriller"] } )

db.inventory.find( { generes: { $in: ["Horror", "Comedy"] } } )

db.inventory.find( { 'tags' : { $in : [ "blank" ,"red"] } } ) // or
db.inventory.find( { tags : { $in : [ "blank" ,"red"] } } )

db.inventory.find( { tags: { $in : ["red", "gel"] }   , qty: { $lt: 30 } })


// qty should be less than 30 and the tags array should consists of either the "red" or "gel"
db.inventory.find( { $or: [ { qty: { $lt: 30 } }, { tags: { $in: ["red", "gel"] } }] } )

// nested querries..
db.inventory.find( { 'size.h' : 19 } )




