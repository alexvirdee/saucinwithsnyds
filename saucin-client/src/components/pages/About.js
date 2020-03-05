import React from 'react';
import profileImage from '../../img/saucin-about-img.jpg';

const About = () => {
  return (
    <div className="border-t">
      <div className="flex flex-col items-center justify-center mt-16">
        <img
          className="rounded-full w-56 h-56 text-center"
          src={profileImage}
          alt="Profile"
        ></img>
        <div className="text-gray-600">
          <div className="container mx-auto text-center pt-12 w-8/12">
            <div className="about-txt">
              Shalom, welcome to my website saucinwithsnyds! I'm excited to have
              you here. I wanted to create a platform to interact with my fans.
              Here at Saucinwithsnyds, I can show you just how to make some of
              my favorite meals step by step. Also, please feel free to create
              your own recipes to my site. I'd love to see what you guys are
              making! You can share, comment, and favorite your recipes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;