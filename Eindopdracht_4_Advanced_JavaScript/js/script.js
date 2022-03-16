console.table(movies);

function addMoviesToDom() {
  movies.map((movie) => {

    const img = document.createElement("img");
    img.src = movie.poster;
    img.classList.add("movie-poster")
   
  document.getElementById("movie-list").appendChild(img);
})
}

addMoviesToDom();


const newMovies = movies.filter((movie) => {
  return movie.year > 2014;
})

console.table(newMovies);

const avengerMovies = movies.filter((movie) => {
  return movie.title.includes("Avengers");
})

console.table(avengerMovies)

const xmenMovies = movies.filter((movie) => {
  return movie.title.includes("X-Men");
})

console.table(xmenMovies)

const princessMovies = movies.filter((movie) => {
  return movie.title.includes("Princess")
})

console.table(princessMovies)

const batmanMovies = movies.filter((movie) => {
  return movie.title.includes("Batman");
})

console.table(batmanMovies)


