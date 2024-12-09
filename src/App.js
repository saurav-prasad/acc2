import './App.css';
import Filters from './components/Filters';
import MovieLists from './components/MovieLists';
import movies from './constants/movies';
import genres from './constants/genres';
import { useState } from 'react';

function App() {
  const [filterData, setFilterData] = useState()

  const changeFilter = (e) => {
    setFilterData(e)
  }

  return (
    <div className="md:px-20 px-5 py-4  max-w-[80rem] mx-auto">
      <h1 className='text-3xl font-bold text-center mt-16 text-gray-900'>Top 15 Movies of All Time</h1>
      <Filters genres={genres} filterData={filterData} changeFilter={changeFilter} />
      <MovieLists movies={movies} filterData={filterData} />
    </div>
  );
}

export default App;
