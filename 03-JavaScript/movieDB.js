var movies = [
    {
        title: "Shrek",
        rating: 4.5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 5,
        hasWatched: false
    },
    {
        title: "Avengers",
        rating: 3.5,
        hasWatched: false
    }
];

// movies.forEach(function(movie) {
//     var result = "You have "
//     if(movie.hasWatched) {
//         result += "watched ";
//     } else {
//         result += "not seen ";
//     }
//     result += "\"" + movie.title + "\" - ";
//     result += movie.rating + " stars";
//     console.log(result)
// });

function buildString(movie) {
    var result = "You have "
    if(movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

movies.forEach(function(movie) {
    console.log(buildString(movie));
});