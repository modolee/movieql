let movies = [
    {
        id: 0,
        title: "Star Wars - The new one",
        score: 0.1
    },
    {
        id: 1,
        title: "Avengers - The new one",
        score: 8
    },
    {
        id: 2,
        title: "The Godfather I",
        score: 99
    },
    {
        id: 3,
        title: "Logan",
        score: 2
    },
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const addMovie = (title, score) => {
  const newMovie = {
      id: movies.length,
      title,
      score
  };

  movies.push(newMovie);

  return newMovie;
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};