db.patients.find({
  age: 20,
  doctorSSN: {
    $in: db.doctors
      .find({ specialty: "Eye Specialist" }, { _id: 0, SSN: 1 })

      .toArray()
      .map((temp) => temp.SSN),
  },
});
