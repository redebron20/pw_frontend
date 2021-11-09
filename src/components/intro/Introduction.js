import React from 'react';
import PhotoWall from './photowall'

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

            <p>
            A resilient, self-motivated and strong team player with years of diverse work experiences who can solve complex problems creatively and strategically.
            </p>
          
          </div>

        </div>

        <div className="photo-wall">
            <PhotoWall/>
        </div>

      </div>

    </div>
  );
}

export default Intro;