import React from 'react';
import {img_300, unavailable} from '../../config/config';
import './SingleContent.css';
import Bedge from '@material-ui/core/Badge/Badge'

const SingleContent = ({id, poster, title, date, media_type, vote_average}) => {
  return (
    <div className="media">
        <Bedge badgeContent={vote_average} color={vote_average>6?'primary':'secondary'} />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title"> {title} </b>
      <span className="subtitle">
        {media_type === 'tv' ? 'TV Series' : 'Movie'}
        <span className="subtitle"> {date} </span>
      </span>
    </div>
  );
};

export default SingleContent;
