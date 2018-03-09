import React from 'react';
import HomeMap from './map/home_map';
import HomeIndex from './home/home_index';

const HomeSearch = ({ homes, fetchHomes }) => {
  return (
    <div>
      <HomeIndex homes={homes} fetchHomes={fetchHomes}/>
      <HomeMap homes={homes}/>
    </div>
  );
};

export default HomeSearch;
