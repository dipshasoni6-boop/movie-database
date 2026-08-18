import type { Movies } from "@/types/movie";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviesDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movies | null>(null);
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data: Movies = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, [id]);
  if (!movie) {
    return <p>Loading...</p>;
  }
  return (
    <main className="mx-auto max-w-4xl p-8">
      <div className="grid gap-8 md:grid-cols-[250px_1fr]">
        {movie.image?.original && (
          <img src={movie.image.original} alt={movie.name} />
        )}
        <div className="">
          <h1 className="text-4xl font-bold">{movie.name}</h1>
          <p className="mt-4 flex items-center gap-2 ">
            Rating: <Star className=" fill-yellow-300 text-yellow-300" />
            {movie.rating?.average ?? "N/A"}
          </p>
          <p className="mt-2">{movie.genres?.join(", ") ?? "No genres available"}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: movie.summary || "No Description Available",
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default MoviesDetail;