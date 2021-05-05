import React from 'react';
import './VideoFooter.scss';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

const VedioFooter = ({channel , desc , song}) => {

  return (
  	// BEM naming convention
    <div className="vedioFooter">
      <div className="vedioFooter__text">
         <h3>@{channel}</h3>
         <p>{desc}</p>
         <div className="vedioFooter__ticker">
           <MusicNoteIcon
                 
                 className="vedioFooter__icon"
           />

           <Ticker mode={"smooth"} offset={"run-in"}  speed={10}>
             {
               ({index}) => (
                   <>
                      <p>{song} #{index}</p>
                   </>
                 )
             }
           </Ticker>
         </div>
      </div>
      <img
        className="vedioFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=''
      />
    </div>
  );
}

export default VedioFooter;
