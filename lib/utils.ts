import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

export const requests = {
  fetchMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  searchMovies: (item: string) =>
    `${BASE_URL}/search/movie?api_key=${ACCESS_TOKEN}&language=en-US&query=${item}`,
  fetchAMovie: (movieId: string) =>
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${ACCESS_TOKEN}&language=en-US&append_to_response=videos`,
};
