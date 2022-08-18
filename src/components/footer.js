import React from 'react';
import  './footer.css';
import { FaFacebook,FaInstagram, FaYoutube, FaSpotify} from 'react-icons/fa';


function Footer() {
  return (
    <>
<div className="footer">
    <h1>  SPARK MUSIC PTY LTD </h1>
<div className="footer-container">
  <div className='flex1-1'>RELEASES</div>
  <div className='flex1'>SHOP</div>
  <div className='flex1'>ARTIST</div>
  <div className='flex1'>SHOW</div>
</div>
<div>
<div className="footer-container">
  <div className='flex2'><FaFacebook size={30}/> </div>
  <div className='flex2'><FaInstagram size={30}/></div>
  <div className='flex2'><FaYoutube size={30}/></div>
  <div className='flex2'><FaSpotify size={30}/></div>
</div>
</div>
 <section className='copy'> Ⓒ COPYRIGHT. ALL RIGHT RESERVED </section>

</div>
</>
  );
}

export default Footer;