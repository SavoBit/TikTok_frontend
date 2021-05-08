import React, {useEffect , useState} from 'react';
import './App.scss';
import Video from './components/Videos/Video'
import axios from './axios'

const App = () => {
 
  const [Videos , setVideos] = useState([])


  useEffect(() => {
    async function fetchPosts(){
        const res = await axios.get('v2/posts')
        setVideos(res.data)
        return res;
    }

    fetchPosts()

  }, [])

  return (
  	// BEM naming convention
    <div className="app">
    	{/*App Container*/}
      <div className="app__videos">
        {Videos.map((item) => (
            <Video
                key={item.id}
                url={item.url}
                poster={item.poster}
                channel={item.channel}
                desc={item.desc}
                song={item.song}
                likes={item.likes}
                shares={item.shares}
                messages={item.messages}
            />
          ))}

      </div>
    </div>
  );
}

export default App;
