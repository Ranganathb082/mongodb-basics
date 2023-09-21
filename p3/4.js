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
  