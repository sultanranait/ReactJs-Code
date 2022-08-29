import React from 'react';
import UserDetails from '../UserDetails/index';
import TrackSearch from '../TrackSearch/index';
import '../../components/Header/Header.css';

const Header = () => {
  return(
    <div className='header'>
      <TrackSearch />
      <UserDetails />
    </div>
  );
};

export default Header ;
