import MovieCard from "@/components/MovieCard";
import type { searchResult } from "@/types/movie";
import  { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [movies, setMovies] = useState<searchResult[]>([]);
  useEffect(() => {
    if (!query) return;
    async function SearchMovies() {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`,
      );
      const data: searchResult[] = await response.json();
      setMovies(data);
    }
    SearchMovies();
  }, [query]);
  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="mb-8 text-3xl font-bold">Search Result</h1>
      <p className="mb-6 text-gray-500">Result for {query}</p>
      <div  className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {movies.map((result) => (
          <MovieCard key={result.show.id} movie={result.show} />
        ))}
      </div>
    </main>
  );
};

export default Search;