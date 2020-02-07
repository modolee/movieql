import { getMovies, getById, addMovie, deleteMovie } from './db';

const resolvers = {
  Query: {
      movies: () => getMovies(),
      movie: (_, { id }) => getById(id)
  },
  Mutation: {
      addMovie: (_, { title, score }) => addMovie(title, score)
  }
};

export default resolvers;