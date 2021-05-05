import React , {useRef , useState} from 'react';
import './Video.scss';
import VideoFooter from './VideoFooter'
import VedioSidbar from './VedioSidbar'

const Video = ({url , poster , channel , desc , song , likes , shares , messages}) => {

  const [playing , setPlaying] = useState(false)

  const videoRef = useRef(null)

  const handelVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)

    }else{

      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
  	// BEM naming convention
    <div className="video">


      <video
          onClick={handelVideoPress}
          className={"video__player"}
          loop
          ref={videoRef}
          poster={poster}
          src={url}
          preload={"none"}
      >
      </video>
      
      <VideoFooter 
          channel={channel}
          desc={desc}
          song={song}
      />

      <VedioSidbar
          likes={likes}
          shares={shares}
          messages={messages}
      />
    </div>
  );
}

export default Video;
