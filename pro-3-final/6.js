// List the details of musicians who can play all the instruments present


db.musician.find({
    iuin: { $all: db.instrument.distinct("iuin") }
  })