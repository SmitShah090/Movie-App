import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Genres from '../../components/Genres';
import SingleContent from '../../components/SingleContent/SingleContent';
import useGenre from '../../hooks/useGenre';

const Movies = () => {
  const [page, setPage] = useState (1);
  const [content, setContent] = useState ([]);
  const [selectedGenres, setSelectedGenres] = useState ([]);
  const [genres, setGenres] = useState ([]);
  const genreforURL = useGenre(selectedGenres)
  const fetchMovies = async () => {
    const {data} = await axios.get (
      `https://api.themoviedb.org/3/discover/movie?api_key=570e41fd2d9490271b86eff02e5f203d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreforURL}`
    );
    setContent (data.results);
    
  };

  useEffect (
    () => {
      fetchMovies ();
    },
    [page, genreforURL]
  );

  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around"}} >
        {content &&
          content.map (c => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
     
    </div>
  );
};

export default Movies;
