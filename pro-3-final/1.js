// 1. List musician name, title of the song which he has played, the album in which song has occurred.


db.musician.aggregate([
  {
    $lookup: {
      from: "song",
      localField: "sid",
      foreignField: "sid",
      as: "songs",
    },
  },
  { $unwind: "$songs" },
  {
    $lookup: {
      from: "album",
      localField: "songs.sid",
      foreignField: "sid",
      as: "albums",
    },
  },
  {
    $project: {
      _id: 0,
      name: 1,
      song: "$songs.sid",
      song_name: "$songs.title",
      album: "$albums.title",
    },
  },
  {
    $group: {
      _id: "$name",
      name: { $addToSet: "$name" },
      album: { $push: { song_name: "$song", album: "$album" } },
    },
  },
  { $project: { _id: 0} },
]);
