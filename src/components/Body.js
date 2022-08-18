import React,{ useRef} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nancy from '../assets/nancy.jpg';
import Skippe from '../assets/skippe.png';
import Lacreamena from '../assets/lacreamena.jpeg';
import YouTube from '../assets/youtube.png';
import './Body.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Monkey from '../assets/monkey.jpg';
import emailjs from '@emailjs/browser';




function Body() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8987jag', 'template_3rzrkve', form.current, 'ybcg9Q169M7U8jify')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
 <div>


<Carousel variant="fade">
          <Carousel.Item className='image'>
            <div><img className='image1'
             
              src={Monkey} 
              alt="monkey"
            /></div>
          <div class="stream-block">
    <h4 className='stream-head'>LINK UP (SPARKMUSIC Ft STINO X SKIPPE)</h4>
    <Button className="stream">STREAM </Button>
  </div>
          </Carousel.Item>
          <Carousel.Item className='image'>
            <div><img className='image1'
             
              src={Nancy} 
              alt="nancy"
            /></div>
              <div class="stream-block">
    <h4 className='stream-head'>MISSUNDERSTOOD </h4>
    <Button className="stream">STREAM </Button>
  </div> 
          </Carousel.Item>

          <Carousel.Item className='image'>
            <div><img className='image1'
              src={Skippe} 
              alt="skippe"
            /></div>
<div class="stream-block">
    <h4 className='stream-head'>GOOD-LIFE</h4>
    <Button className="stream">STREAM </Button>
  </div>
          </Carousel.Item>
         
        </Carousel>

<div className='header'>
           <h1 className='spark'>SPARK MUSIC PTY LTD</h1> 
           <p className='description' >Spark-Music is a multi-faceted company in the entertainment and music industries, full of talented artists and surrounded by a beautiful family.
Every year, Spark-music releases a project called S.Vibz, which includes seven songs.<br></br> In July 2021, the first project was released. You can listen to it on platforms like Spotify, Apple Music, and Google Music. 
<br></br>Moreover, Spark-Music conducts a yearly show to maintain and celebrate with the family, artists, and fans worldwide.Ultimately, it is about celebrating life in the fashion we know. </p>
</div>

<h1 className='head'> ARTISTS</h1>

  <div className='artist'>
    
    <Row className='photo'>
      <Col className='col'>
      <Card  style={{ width:'25rem' }}>
      <Card.Img  variant="top" src={Skippe} />
      <Card.Body>
        <Card.Title className='name'><b>Skippe</b><br></br> Singer/Producer </Card.Title>
        <Card.Text className='bio'>
          Very Talented individual, gifted with the ears for sound and making outstanding records, from this soul directly to this special fams and family worldwide. 
          
        </Card.Text>
      
      </Card.Body>
    </Card>
        </Col>

        <Col>
      <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={Nancy} />
      <Card.Body>
      <Card.Title className='name'><b>MissNancy</b><br></br> Singer  </Card.Title>
        <Card.Text className='bio'>
        Afro Jazz Artist, working with Spark-Music on her first project (Misunderstood), released in April W1orldwide. 
        </Card.Text>
      
      </Card.Body>
    </Card>
        </Col>

        <Col>
      <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={Lacreamena} />
      <Card.Body>
      <Card.Title className='name'><b>Lacreamena</b><br></br> Singer/Producer  </Card.Title>
        <Card.Text className='bio'>
        A talented musical artist inspired by French rapper Booba has contributed to the musical sector by creating music like OIOIOI, SHAKE, and HIGHER. 
        </Card.Text>
      
      </Card.Body>
    </Card>
        </Col>
    </Row>
    </div>

  <div className="contain">
  <div  className="youtube-container">
  <img className="youtube" src={YouTube} alt="youtube"/>
  </div>
  <div class="box">
  <p><strong>Link Up (Sparkmusic Ft Stino X Skippe) </strong></p>   
            <p ><b>SONG</b>: LINK UP (feat. SKIPPE & STINO)</p>
            <p><b>ARTIST</b>: Sparkmusic</p>
            <p><strong>Licensed to YouTube by:</strong><br></br> 
            Interstreet Recordings (on behalf of SPARK);
                                            Interstreet Publishing</p>
  </div>
</div>


<div className="meet">
<div  className="meet1">
  <section>
    <h1 className="topic">WORK WITH ME</h1>
    <p>There are many ways that we can create great songs together. Over the past decade, 
I’ve completed projects for independent artists, rappers, singers, songwriters, companies,
and more. Ready to get to work?
Contact me by filling out the form on the right! I look forward to working with you.</p>
  </section>
  </div>
  <div class="newsletter">
    <div>
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="name" name="name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" name="phone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control className="mb-5" as="textarea" aria-label="With textarea" name="message" />
      </Form.Group>
      <Button className="button" variant="primary" type="submit" value="Send Message">
        Submit
      </Button>
    </Form>
    </div>
  
  </div>
  </div>
  </div>
   
  );
}

export default Body;
