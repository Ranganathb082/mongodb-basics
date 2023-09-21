db.doctors.aggregate([
  {
    $lookup: {
      from: "drugs",
      localField: "SSN",
      foreignField: "prescribedByDoctorSSN",
      as: "prescribedDrugs",
    },
  },
  {
    $match: {
      "prescribedDrugs.prescriptionDate": {
        $regex: /^2013-/,
      },
    },
  },
  {
    $group: {
      _id: "$_id",
      name: { $first: "$name" },
      specialty: { $first: "$specialty" },
      yearsOfExperience: { $first: "$yearsOfExperience" },
      patientCount: { $sum: 1 } /* Count unique
patients based on prescriptions*/,
    },
  },
  { $match: { patientCount: { $gte: 1 } } },
]);
