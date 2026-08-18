import  { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xl gap-2">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 rounded-1g border px-4 py3 outline-none focus:ring-2"
      />
      <button 
      type="submit"
      className="bg-black px-6 py-3 font-medium text-white rounded-lg" 
      >Search</button>
    </form>
  );
}

export default SearchBar;