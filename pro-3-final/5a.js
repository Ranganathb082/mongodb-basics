
const producersList = db.album.distinct("producer");

const instrument_to_have = db.instrument.distinct("iuin", { name: { $in: ["flute", "guitar"] } });

const producerList = db.musician.distinct("ssn", { ssn: { $in: producersList }, iuin: { $all: instrument_to_have } });

const minSidCount = db.album
  .aggregate([
    { $group: { _id: "$producer", totalSongs: { $sum: { $size: "$sid" } } } },
    { $group: { _id: null, avgSongsProduced: { $avg: "$totalSongs" } } },
    { $project: { _id: 0, avgSongsProduced: 1 } },
  ])
  .next().avgSongsProduced;

//   Grouping by producer
// size of the sid array
//

// m001 : 6 songs
// moo4 : 3 songs

// 9/2= 4.5

// const minSidCount = db.album.aggregate([ { $group: { _id: "$producer", totalSongs: { $sum: { $size: "$sid" } } } }, { $group: { _id: null, avgSongsProduced: { $avg: "$totalSongs" } } }, { $project: { _id: 0, avgSongsProduced: 1 } }] ).next().avgSongsProduced;


// const minSidCount = 5;

db.album.aggregate([
  {
    $group: {
      _id: "$producer",
      totalSongs: { $sum: { $size: "$sid" } }
    }
  },
  {
    $match: {
      totalSongs: { $gt: minSidCount }
    }
  },
  {
    $project: {
      _id: 0,
      producer: "$_id",
      totalSongs: 1
    }
  }
]);




// notown> db.musician.aggregate([
//   ...   {
//   ...     $match: {
//   ...       ssn: { $in: producersList },
//   ...       $expr: { $gte: [{ $size: "$sid" }, minSidCount] },
//   ...     },
//   ...   },
//   ...   { $project: { _id: 0, name: 1, sidCount: { $size: "$sid" } } },
//   ... ]);
  
//   notown> db.musician.aggregate([ { $match: { ssn: { $in: producersList }, $expr: { $lte: [{ $size: "$sid" }, minSidCount] } } }, { $project: { _id: 0, name: 1, sidCount: { $size: "$sid" } } }] );
//   [ { name: 'Alice', sidCount: 2 }, { name: 'Krish', sidCount: 3 } ]
//   notown>