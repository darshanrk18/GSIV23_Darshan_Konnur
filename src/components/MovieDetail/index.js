import React from 'react';
import './styles.css'

const If = ({ test, children }) => {
  if (test) return <>{children}</>;
  return null;
}

const MovieDetail = ({ movie, cast }) => {
  return (
    <div className="movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
      <div className="movie-info">
        <div className='title'>
          <h2>{movie.title}</h2>
          <p>({movie.vote_average})</p>
        </div>
        <p>
          <If test = {movie.release_date}> {`${movie.release_date} `} </If>
          <If test = {movie.runtime}> {`| ${movie.runtime} min `} </If>
          <If test = {movie.director}> {`| ${movie.director}`} </If>
        </p><br></br>
        <p><b>Cast: </b> {cast.join(', ')}</p>
        <p><b>Description: </b> {movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
