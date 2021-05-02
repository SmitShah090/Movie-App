import {Chip} from '@material-ui/core';
import axios from 'axios';
import React, {useEffect} from 'react';

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = genre => {
    setSelectedGenres ([...selectedGenres, genre]);
    setGenres (genres.filter (g => g.id !== genre.id));
    setPage (1);
  };

  const handleRemove = genre => {
    setSelectedGenres (
      selectedGenres.filter (selected => selected.id !== genre.id)
    );
    setGenres ([...genres, genre]);
    setPage (1);
  };

  const fetchGenres = async () => {
    const {data} = await axios.get (
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=570e41fd2d9490271b86eff02e5f203d&language=en-US`
    );
    setGenres (data.genres);
  };
  console.log (genres);
  useEffect (() => {
    fetchGenres ();

    return () => {
      setGenres ({});
    };
  }, []);

  return (
    <div style={{padding: '6px 0'}}>
      {selectedGenres &&
        selectedGenres.map (genre => (
          <Chip
            key={genre.id}
            color="primary"
            label={genre.name}
            style={{margin: 2}}
            clickable
            size="small"
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map (genre => (
          <Chip
            key={genre.id}
            label={genre.name}
            style={{margin: 2}}
            clickable
            size="small"
            onClick={() => handleAdd (genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
