import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';
import '../styles/styles.css';
import { useDataContext } from '../context/DataContext';

const ListPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { searchResults } = useDataContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming`,
        {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            page: page,
          },
        }
      );

      if (response.data.results.length === 0) {
        setHasMore(false);
        return;
      }

      const newMovies = [...movies, ...response.data.results];
      const sortedMovies = newMovies.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );

      setMovies(sortedMovies);
      setPage(page + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  const displayedMovies = searchResults.length ? searchResults : movies;

  return (
    <div className="list-page">
      <Header isDetailsPage={false} />
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={displayedMovies.length}
          next={fetchMovies}
          hasMore={hasMore}
          loader={<h4 className='inline-loader'><div className="loader"></div></h4>}
        >
          <div className='movie-cards-container'>
            {displayedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default ListPage;
