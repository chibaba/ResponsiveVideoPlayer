import React from 'react';

import ReactPlayer from 'react-player';
import './ResponsivePlayer.css'

const ResponsivePlayer = ({ url, onProgress }) => {
  {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player' width="100%" height="100%"
          url={url}

          controls={true}
          onProgress={onProgress}
        />
      </div>
    )
  }
}
export default ResponsivePlayer;