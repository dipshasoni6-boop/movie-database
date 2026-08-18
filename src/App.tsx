import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import SearchBar from "./Pages/Search";
import MoviesDetails from "./Pages/MoviesDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/movies/:id" element={<MoviesDetails />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App 
