import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import MovieDetail from '../components/MovieDetail';

const DetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieDetails();
    fetchCastDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
          },
        }
      );

      setMovie(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCastDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits`,
        {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
          },
        }
      );

      const director = response.data.crew.find((crewMember) => crewMember.job === 'Director');
      const castNames = response.data.cast.map((castMember) => castMember.name);

      setCast(castNames);
      setMovie((prevMovie) => ({
        ...prevMovie,
        director: director ? director.name : 'Director information not available',
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="details-page">
      <Header isDetailsPage={true} />
      {movie && <MovieDetail movie={movie} cast={cast} />}
    </div>
  );
};

export default DetailsPage;
