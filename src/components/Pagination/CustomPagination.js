import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const CustomPagination = ({setPage, numOfPages = 10}) => {
  const handlePageChange = (page) => {
    setPage (page);
    window.scroll (0, 0);
  };

  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: 10}}>
      <Pagination
        count={numOfPages}
        onChange={e => handlePageChange (e.target.textContext)}
      />
    </div>
  );
};

export default CustomPagination;
