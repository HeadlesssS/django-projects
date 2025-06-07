// Sample data for movies
const trendingMovies = [
    { id: 1, title: "Dune", year: 2021, rating: 8.0, poster: "https://placehold.co/300x450" },
    { id: 2, title: "The Batman", year: 2022, rating: 7.9, poster: "https://placehold.co/300x450" },
    { id: 3, title: "No Time to Die", year: 2021, rating: 7.3, poster: "https://placehold.co/300x450" },
    { id: 4, title: "Spider-Man: No Way Home", year: 2021, rating: 8.3, poster: "https://placehold.co/300x450" },
    { id: 5, title: "Top Gun: Maverick", year: 2022, rating: 8.3, poster: "https://placehold.co/300x450" },
    { id: 6, title: "The Northman", year: 2022, rating: 7.1, poster: "https://placehold.co/300x450" },
  ]
  
  const newMovies = [
    { id: 7, title: "Oppenheimer", year: 2023, rating: 8.5, poster: "https://placehold.co/300x450" },
    { id: 8, title: "Barbie", year: 2023, rating: 7.0, poster: "https://placehold.co/300x450" },
    {
      id: 9,
      title: "Mission: Impossible - Dead Reckoning",
      year: 2023,
      rating: 7.8,
      poster: "https://placehold.co/300x450",
    },
    { id: 10, title: "Killers of the Flower Moon", year: 2023, rating: 7.7, poster: "https://placehold.co/300x450" },
    { id: 11, title: "Poor Things", year: 2023, rating: 8.0, poster: "https://placehold.co/300x450" },
    { id: 12, title: "The Holdovers", year: 2023, rating: 7.9, poster: "https://placehold.co/300x450" },
  ]
  
  const topMovies = [
    { id: 13, title: "The Shawshank Redemption", year: 1994, rating: 9.3, poster: "https://placehold.co/300x450" },
    { id: 14, title: "The Godfather", year: 1972, rating: 9.2, poster: "https://placehold.co/300x450" },
    { id: 15, title: "The Dark Knight", year: 2008, rating: 9.0, poster: "https://placehold.co/300x450" },
    { id: 16, title: "Pulp Fiction", year: 1994, rating: 8.9, poster: "https://placehold.co/300x450" },
    { id: 17, title: "Fight Club", year: 1999, rating: 8.8, poster: "https://placehold.co/300x450" },
    { id: 18, title: "Inception", year: 2010, rating: 8.8, poster: "https://placehold.co/300x450" },
  ]
  
  const recommendedMovies = [
    { id: 19, title: "Interstellar", year: 2014, rating: 8.6, poster: "https://placehold.co/300x450" },
    { id: 20, title: "The Matrix", year: 1999, rating: 8.7, poster: "https://placehold.co/300x450" },
    { id: 21, title: "Parasite", year: 2019, rating: 8.5, poster: "https://placehold.co/300x450" },
    { id: 22, title: "Joker", year: 2019, rating: 8.4, poster: "https://placehold.co/300x450" },
    {
      id: 23,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      rating: 8.8,
      poster: "https://placehold.co/300x450",
    },
    { id: 24, title: "Gladiator", year: 2000, rating: 8.5, poster: "https://placehold.co/300x450" },
  ]
  
  const watchlistItems = [
    { id: 1, title: "Inception", year: 2010, rating: 8.8, poster: "https://placehold.co/300x450", type: "movie" },
    { id: 2, title: "The Dark Knight", year: 2008, rating: 9.0, poster: "https://placehold.co/300x450", type: "movie" },
    { id: 3, title: "Interstellar", year: 2014, rating: 8.6, poster: "https://placehold.co/300x450", type: "movie" },
    { id: 4, title: "Breaking Bad", year: 2008, rating: 9.5, poster: "https://placehold.co/300x450", type: "tv" },
    { id: 5, title: "Stranger Things", year: 2016, rating: 8.7, poster: "https://placehold.co/300x450", type: "tv" },
    { id: 6, title: "The Mandalorian", year: 2019, rating: 8.8, poster: "https://placehold.co/300x450", type: "tv" },
  ]
  
  // Movie details for the movie page
  const movieDetails = {
    inception: {
      id: "inception",
      title: "Inception",
      year: 2010,
      rating: 8.8,
      duration: "2h 28m",
      ageRating: "PG-13",
      genres: ["Action", "Adventure", "Sci-Fi"],
      director: "Christopher Nolan",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"],
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      poster: "https://placehold.co/300x450",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
  }
  