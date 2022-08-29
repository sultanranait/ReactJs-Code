import React from 'react';
import PropTypes from 'prop-types';
import SongList from '../../containers/SongList/index';
import AlbumList from '../../containers/AlbumList/index';
import ArtistList from '../../containers/ArtistList/index';
import BrowseView from '../../containers/BrowseView/index';
import './MainView.css';

const MainView = ({ headerTitle, audioControl, resumeSong, pauseSong }) => {

  return (
    <div>
      {
        headerTitle === 'Albums' ?
          (<AlbumList audioControl={ audioControl } />) :
          headerTitle === 'Artists' ?
            (<ArtistList />) :
            (headerTitle === 'Browse') ?
              ( <BrowseView />) :
              //anything else show SongList
              ( <SongList resumeSong={ resumeSong } pauseSong={ pauseSong } audioControl={ audioControl } />)
      }
    </div>
  );

};

MainView.propTypes = {
  headerTitle: PropTypes.string,
  audioControl: PropTypes.func,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func
};

export default MainView;
