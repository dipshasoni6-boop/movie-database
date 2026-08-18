import type { Movies } from "@/types/movie";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
interface Props {
  movie: Movies;
}
const MovieCard = ({ movie }: Props) => {
  return (
    <Link to={`/movies/${movie.id}`}
    className="overflow-hidden rounded-lg border bg-white shadow transition hover:translate-y-1 hover:shadow-lg">
      {movie.image?.medium && (
        <img
          src={movie.image.medium}
          alt={movie.name}
          className="h-72 w-full object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="font-semibold">{movie.name}</h2>
        <p className="flex text-sm text-gray-400">
          <Star className="fill-amber-300 text-amber-300 h-4 w-4" />{" "}
          {movie.rating.average ?? "N/A"}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard; 