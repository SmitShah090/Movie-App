import axios from 'axios';
import React, {useEffect, useState} from 'react';
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import "./Trending.css";
const Trending = () => {
  const [content, setContent] = useState ([]);
  const [page, setPage] = useState(1)

  const fetchTrending = async () => {
    const {data} = await axios.get (
      `https://api.themoviedb.org/3/trending/all/week?api_key=570e41fd2d9490271b86eff02e5f203d&page=${page}`
    );
    console.log (data);
    setContent (data.results);
  };

  useEffect (() => {
    window.scroll(0, 0);
    fetchTrending ();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div classsName="trending">
        {content &&
          content.map (c => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
        <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;