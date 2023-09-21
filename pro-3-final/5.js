// Retrieve album title produced by the producer who plays guitar as well as flute and has produced no of songs greater than or equal to the average songs produced by all producers.

const producersList = db.album.distinct("producer");

const instrument_to_have = db.instrument.distinct("iuin", {
  name: { $in: ["flute", "guitar"] },
});

const temp = db.musician.aggregate([
  {
    $match: { ssn: { $in: producerList }, iuin: { $all: instrument_to_have } },
  },
]);


const total_producers = db.album.distinct("producer").length

const total_songs = db.album.aggregate([ { $unwind: "$sid" }] ).itcount();

const avg_song = Math.floor(total_songs/total_producers)


