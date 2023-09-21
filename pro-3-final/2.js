// Retrieve the name of Musician who have not produced any Album

db.musician.find({ ssn: { $nin: db.album.distinct("producer") } });

// db.album.distinct("producer")


// select producers ssn and use not in opertor