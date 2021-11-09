
import React from 'react';

const PhotoWall = () => {
    return (
        <div className="Photo-wrapper">
            <div className="pw">
                <img src="https://res.cloudinary.com/yourladyred20/image/upload/v1636500351/pw/IMG_2644_hxslvl.jpg" className="pw-img-first"/>
            </div>

            <div className="pw">
                <img src="https://res.cloudinary.com/yourladyred20/image/upload/v1636500351/pw/IMG_2645_mbumwc.jpg" className="pw-img"/>
            </div>

            <div className="pw">
                <img src="https://res.cloudinary.com/yourladyred20/image/upload/v1636500351/pw/IMG_2642_plhngx.jpg" className="pw-img"/>
            </div>

            <div className="pw">
                <img src="https://res.cloudinary.com/yourladyred20/image/upload/v1636501352/pw/IMG_2650_zbq5os.jpg" className="pw-img"/>
            </div>

            <div className="pw">
                <img src="https://res.cloudinary.com/yourladyred20/image/upload/v1636501353/pw/IMG_2647_oka8ko.jpg" className="pw-img"/>
            </div>

            <div className="pw">
                <img src="https://res.cloudinary.com/yourladyred20/image/upload/v1636501353/pw/IMG_2649_un7ccl.jpg" className="pw-img-last"/>
            </div>

        </div>
    
    );
}

export default PhotoWall;