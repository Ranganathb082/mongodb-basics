db.inventory.find() // - fetch all documents

crud> db.inventory.find({title:"The Wailing"})
[
  {
    _id: ObjectId("64f87344e3207bf631aa6578"),
    title: 'The Wailing',
    generes: [ 'Horror', 'Thriller' ],
    runtime: 165,
    year: 2016,
    part_two: {
      title: 'The Wailing returns',
      release_date: 'upcoming',
      generes: [ 'horror', 'zombie' ],
      runtime: 165
    }
  }
]

crud> db.inventory.find({generes:["Horror","Thriller"]})
[
  {
    _id: ObjectId("64f87344e3207bf631aa6578"),
    title: 'The Wailing',
    generes: [ 'Horror', 'Thriller' ],
    runtime: 165,
    year: 2016,
    part_two: {
      title: 'The Wailing returns',
      release_date: 'upcoming',
      generes: [ 'horror', 'zombie' ],
      runtime: 165
    }
  }
]

// $in operator is used to search for particluar elements

crud> db.inventory.find( { generes: { $in: ["Horror", "Comedy"] } } )
[
  {
    _id: ObjectId("64f87344e3207bf631aa6578"),
    title: 'The Wailing',
    generes: [ 'Horror', 'Thriller' ],
    runtime: 165,
    year: 2016,
    part_two: {
      title: 'The Wailing returns',
      release_date: 'upcoming',
      generes: [ 'horror', 'zombie' ],
      runtime: 165
    }
  }
]


db.inventory.find( { 'tags' : { $in : [ "blank" ,"red"] } } )
[
  {
    _id: ObjectId("64f87ba238935c4adad65eb7"),
    item: 'journal',
    qty: 25,
    tags: [ 'blank', 'red' ],
    size: { h: 14, w: 21, uom: 'cm' }
  },
  {
    _id: ObjectId("64f87ba238935c4adad65eb8"),
    item: 'mat',
    qty: 85,
    tags: [ 'red' ],
    size: { h: 27.9, w: 35.5, uom: 'cm' }
  }
]

db.inventory.find( { 'size.h' : 19 } )
[
  {
    _id: ObjectId("64f87ba238935c4adad65eb9"),
    item: 'mousepad',
    qty: 25,
    tags: [ 'gel', 'blue' ],
    size: { h: 19, w: 22.85, uom: 'cm' }
  }
]