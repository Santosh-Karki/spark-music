import React from 'react';
import "./lacreamena.css";
import lacreamena from '../assets/lacreamena.jpeg';
import FigureImage from 'react-bootstrap/FigureImage';
import Head from '../components/Head.js';
import Button from 'react-bootstrap/Button';
import YouTube from 'react-youtube';
import Footer from '../components/footer';

function Lacreamena() { 

  return (
    <div className="nancy">
       <Head/>
       <div><FigureImage
       className='nancy1'
        alt="skippe photo"
        src={lacreamena}
      /></div>

<div className="song">
          <div  className="songs-container">
          <h1 className='heading'>MUSIC</h1>
  <FigureImage
       className='image'
        alt="Missnancy photo"
        src={lacreamena}
      />  </div>

  <div className="opt">
    MELBOURNE LIFE
  <Button className="opt1" size="lg">
        STREAM/DOWNLOAD
      </Button>
  </div>
</div>



<div className="video" >
          <div>
          <h1 className='headings'>VIDEO</h1>
          <YouTube  iframeClassName='videos' videoId="XlqMZy6R8xY"  />
           </div>
      </div>


<div className="bio">
          <div  className="bio-container">
          <h1 className='heading'>BIO</h1>
          gracie Itala mavuya is a famous rapper who is also known as lacreamena he was born in 1995/01/31 in Congo his 
          favourite hobbies are playing soccer, listening music, cooking e.t.c
           he prefer hip hop, afro beats,rock and roll and jazz music he was inspired by his father and in the world of music he was inspired by French rapper booba when
        he was 13 in every one's there is someone who support you so he has been supported by his granmother in his every decision and she is very hard working women. </div>

  <div className="opt2">
  <FigureImage
       className='image1'
        alt="Missnancy photo"
        src={lacreamena}
      />
  </div>
</div>
<div><Footer/></div>
    
   </div>
   
  );
}

export default Lacreamena;