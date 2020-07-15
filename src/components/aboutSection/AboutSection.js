import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './aboutSection.scss';
import '../app.scss';

const AboutSection = () => (
  <section className='about container'>
    <h2 className='about-title'>Let's get acquainted</h2>
    <div className='about-description'>
      <h3 className='about-description-title'>I am cool frontend developer</h3>
      <p className='about-description-text'>
        We will evaluate how clean your approach to writing CSS and Javascript
        code is. You can use any CSS and Javascript 3rd party libraries without
        any restriction.
      </p>
      <p className='about-description-text'>
        If 3rd party css/javascript libraries are added to the project via
        bower/npm/yarn you will get bonus points. If you use any task runner
        (gulp/webpack) you will get bonus points as well. Slice service
        directory page P​SD mockup​ into HTML5/CSS3.
      </p>
    </div>
    <AnchorLink href='#register' className='about-btn'>
      Sing up now
    </AnchorLink>
  </section>
);

export default AboutSection;
