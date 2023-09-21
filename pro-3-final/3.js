// List the details of songs which are performed by more than 2 musicians.

db.song.aggregate([
  {
    $lookup: {
      from: "musician",
      localField: "sid",
      foreignField: "sid",
      as: "musicians",
    },
  },
  {
    $project: {
      _id: 0,
      sid: 1,
      stitle: 1,
      author: 1,
      numMusicians: { $size: "$musicians" },
    },
  },
  { $match: { numMusicians: { $gt: 2 } } },
]);

// in songs table i join  singers 
// with musicians arary i find the length of array and i compare it with 2 