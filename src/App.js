import React from 'react';
import './App.scss';
import Video from './components/Videos/Video'

const App = () => {
 
  const details = [
              {
                id:1,
                url:'./Vedios/irto.mp4',
                poster:"irto.jpg",
                channel:"ErtugrulGhazi",
                desc:"This Is Tiktok Clone Build By MERN Stack",
                song:"the Headline of element",
                likes:111,
                shares:222,
                messages:333
              },
              {
                id:2,
                url:'./Vedios/osm.mp4',
                poster:"osm.jpg",
                channel:"OsmanGazi",
                desc:"This Is Tiktok Clone Build By MERN Stack",
                song:"the Headline of element",
                likes:100,
                shares:200,
                messages:300,
              },
              {
                id:3,
                url:'./Vedios/sult.mp4',
                poster:"sult.png",
                channel:"SultanAbdulHamid",
                desc:"This Is Tiktok Clone Build By MERN Stack",
                song:"the Headline of element",
                likes:100,
                shares:50,
                messages:90,
              },
    ]

  return (
  	// BEM naming convention
    <div className="app">
    	{/*App Container*/}
      <div className="app__videos">
        {details.map((item) => (
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
    		{/*<Videos />*/}
    		{/*<Video />*/}
    		{/*<Video />*/}
    		{/*<Video />*/}
    		{/*<Video />*/}
    		{/*<Video />*/}
    </div>
  );
}

export default App;
