import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar'
import type { Movies } from '@/types/movie';
import  { useEffect, useState } from 'react'

const Home = () => {
    const [movies,setMovies]=useState<Movies[]>([])
    const [loading,setLoading]=useState(true)

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response =await fetch("https://api.tvmaze.com/shows");
                const data: Movies[] = await response.json()
                setMovies(data.slice(0, 12));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false)
            }    
        }
        fetchMovies();
    }, []);

    if (loading) {
        return(<p>Loading...</p>)
    }
  return (
    <main className="mx-auto max-w-6xl p-8">
        <div className="mb-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold">Movie Database</h1>
          <SearchBar />
        </div>
        <h2 className='mb-6 text-2xl font-semibold'>Popular Shows</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </main>   
  );
};

export default Home;

