import React from 'react';
import './Video.scss'

const Video = () => {
  return (
  	// BEM naming convention
    <div className="video">
    	<video src='./vedio.mp4'></video>

      {/*Vedio Footer*/}
      {/*Vedio Sidbar*/}
    </div>
  );
}

export default Video;
