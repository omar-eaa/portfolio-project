import React from 'react';
import frontPageImg from '../img/front-page-img.jpg';
import frontPageImg2 from '../img/rounded_border.png';

export default function FrontPageImg() {
  return( <div>
       {/* <img className='rounded-border' src={frontPageImg2} alt="rounded border" /> */}
       <img className='front-page-profile-img' src="../../public/img-ofMe/hero-img-1.jpg" alt="Front Page" />

    </div>
  )
}
