
import Header from './components /Header'
import IntroName from './components /IntroName'
import AnimateText from './components /AnimateText'
import LinkGroup from './components /LinkGroup'
import FrontPageImg from './components /FrontPageImg'
import AboutMeImage from './components /AboutMeImage'
import MySkills from './components /MySkills'
import PortfolioWork from './components /PortfolioWork'
import ContactMe from './components /ContactMe'
import Footer from './components /Footer'
import './App.css'


function App() {


  return (
    <>
        <Header/>
    <section className='front-page'>
  <div className='content-front-page'>
 <div className='front-page-left-area'>
   <IntroName/>
    <AnimateText/>
    <LinkGroup/>
 </div>

   <div className='front-page-right-area'>
   <FrontPageImg/>
   </div>

   </div>
  
    </section>
   
  {/* about me section*/}
  
  <section className='about-container'>
  <AboutMeImage/>
  </section>
  <section className='skills-icons'>
  <MySkills/>
  </section>

  <section className='project-container'>
  <PortfolioWork/>
  </section>

  <section className='contact-container'>
  <ContactMe/>
  </section>

<section className='footer-container'>
<Footer/>
</section>
    </>
  )
}

export default App
