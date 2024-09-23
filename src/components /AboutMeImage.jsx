import React, { useEffect, useRef, useState } from 'react';
import heroImg2 from "../assets/img/img-ofMe/hero-img-2.jpg"
export default function AboutMeImage() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, { threshold: 0.1 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`image-container ${isVisible ? 'animate-slide-in' : ''}`}
            >
            {/* <img className="about-img" src="../../public/img-ofMe/hero-img-2.jpg" alt="About Me" /> */}
            <img className="about-img" src={heroImg2} alt="About Me" />

            <div id="aboutMeLink" className="about-me-text-container">
                <div className="about-me-h2-p-container">
                    <h2>ABOUT ME</h2>
                    <p>Hello! I’m a student at Eaaa Multimediedesigner, currently in my third semester, diving into front-end development with React.js, JavaScript, and Firebase. My studies have also covered UX/UI design, HTML, CSS, and Figma.

Outside of academics, I stay active with gym workouts, running, and playing football. My goal is to become a skilled full-stack developer. I’m driven by the support of my family and friends, and I’m dedicated to working hard and improving my skills.

I’m building experience with web technologies and am eager to start my career in front-end development. Thanks for visiting my page—I look forward to connecting with you!</p>                    <div className="about-me-grid">
                        <h4>Name <p>Omar Gaal</p></h4>
                        <h4>Email <p>omargaal123@gmail.com</p></h4>
                        <h4>Education <p>Eaaa Multimediedesigner</p></h4>
                        <h4>Employment <p>Open</p></h4>
                        <a href="https://blue-zulema-55.tiiny.site/">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
