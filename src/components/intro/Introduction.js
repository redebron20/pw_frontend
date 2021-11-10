import React from 'react';
import PhotoWall from './photowall'
// import PhotoCarousel from './photo_carousel'

const Intro = () => {
  return (
    <div>
      <div className="intro">

        <div className="intro-wrapper">

          <div className="hello-spot">
            <img src="https://res.cloudinary.com/yourladyred20/image/upload/v1636500351/pw/IMG_2641_c2y9ov.jpg" className="hello-img"/>
          </div>

          <div className="about-me">
            <b className="about-title">About Me</b>
            <p>
              <b className="about-subtitle">EA to Software Developer</b>
            </p> 

            <p>Hello there - welcome to my personal page!
            My name is Red and it is wonderful to meet you!
            I've worked in many different industries for the past decade. I've held many different roles in sales and marketing, outsourcing, data management and administration. For the last three years prior to the COVID-19 pandemic, I've worked as an executive assistant to the CEO of tech company in New York City. 
            Currently, I am transitioning to become a full stack software developer with Flatiron School. Outside of work and coding, I'm a 2-year-old mom who loves to read and listen to audible books, travel the world, and capture beautiful photos. 
          
            </p>
          
          </div>

        </div>

        <div className="photo-wall">
            <PhotoWall />
        </div>

      </div>

    </div>
  );
}

export default Intro;