export interface Movie {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
}

export interface MovieList {
  items: Movie[];
  errorMessage: string;
}
