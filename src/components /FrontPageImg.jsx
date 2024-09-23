import React from 'react';
import frontPageImg from '../assets/img/img-ofMe/hero-img-1.jpg';

export default function FrontPageImg() {
  return( <div>
       {/* <img className='rounded-border' src={frontPageImg2} alt="rounded border" /> */}
       <img className='front-page-profile-img' src={frontPageImg} alt="Front Page" />

    </div>
  )
}
