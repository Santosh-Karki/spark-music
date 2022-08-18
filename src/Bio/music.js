import React from 'react';
import './music.css';
import { SiApplemusic,  SiYoutube, SiSpotify }  from 'react-icons/si';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Nancy from '../assets/nancy.jpg'



function Music() {
  return (

    <div>
      <div className="big-box">
      </div>
        <div className="music">
  <div>
  <Figure >
      <Figure.Image className="picture"
        alt="missNancy"
        src={Nancy}
      />
      </Figure>
      <div className='box'>
        <strong>MISSUNDERSTOOD</strong></div>
      </div>

  <div className='music1'>
    <SiApplemusic className="icons" color="red" size="40"/> Apple Music   
     <Button className="play">Play</Button>
    </div>

  <div className='music1'>
  <SiSpotify className="icons" color="green" size="40"/> Spotify  
     <Button className="play">Play</Button>
    </div>
  
  <div className='music1'>
  <SiYoutube className="icons" color="red" size="40"/> Youtube  
     <Button className="play">Play</Button>
    </div>
  
</div>
</div>
  );
}

export default Music;
