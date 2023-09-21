db.musician.aggregate([
  {
    $lookup: {
      from: "instrument",
      localField: "iuin",
      foreignField: "iuin",
      as: "instruments",
    },
  },
  { $project: { name: 1, instruments: "$instruments.name" } },
]);

//  List the different instruments played by the musicians and the average number of musicians who play the instrument.

db.instrument.aggregate([
  {
    $lookup: {
      from: "musician",
      localField: "iuin",
      foreignField: "iuin",
      as: "players",
    },
  },
  {
    $project: {
      _id: 0,
      instrument_name: "$name",
      players: "$players.name",
      total: { $size: "$players" },
    },
  },
  {
    $project: {
      instrument_name: "$instrument_name",
      players: "$players",
      averageMusicians: { $divide: ["$total", db.musician.count()] },
    },
  },
]);
