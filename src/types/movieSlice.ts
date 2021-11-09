export interface FetchedMovieObject {
  items: Movie[];
  errorMessage: string;
}
export interface Movie {
  id: string;
  rank: string;
  rankUpDown: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
}

export interface RootState {
  data: FetchedMovieObject;
  loading: boolean;
  error: string;
}
