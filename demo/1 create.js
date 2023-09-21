db.inventory.insertMany([
    { title: "Jurassic World: Fallen Kingdom", genres: [
            "Action",
            "Sci-Fi"
        ], runtime: 130, rated: "PG-13", year: 2018, directors: [
            "J. A. Bayona"
        ], cast: [
            "Chris Pratt",
            "Bryce Dallas Howard",
            "Rafe Spall"
        ], type: "movie"
    },
    { title: "Tag", genres: [
            "Comedy",
            "Action"
        ], runtime: 105, rated: "R", year: 2018, directors: [
            "Jeff Tomsic"
        ], cast: [
            "Annabelle Wallis",
            "Jeremy Renner",
            "Jon Hamm"
        ], type: "movie"
    },
    { title: "The Wailing", generes : [
            "Horror",
            "Thriller"
        ], runtime : 165, year : 2016, part_two : { title : "The Wailing returns", release_date : "upcoming", generes : [
                "horror",
                "zombie"
            ], runtime : 165
        }
    }
] );