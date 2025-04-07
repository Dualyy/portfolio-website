
import './App.css'
import {ModalGallery} from '../lib/main'
import { nanoid } from 'nanoid';
import {galleryInfo as test} from './assets/galleryInfo';
function App() {

  return (
    <>
      <section className={"sections"}>
        <div
          className={
            "Fullpage-container"
          }
          id={"idk"}
        >
          <h1 className={"introduction"}>
            Hi, I'm Lars{" "}
            <img 
              className={"hugemoji"}
              src={"/assets/images/favicon.svg"}
              alt={"hug emoji"}
              height={"80em"}/>
          </h1>
          <br />
          <h2 className="introduction-text">
          <hr className="shorter-line" />
            I'm a <br />
            <span className={"gradient-background-text bigfont"}>Junior Front-End developer</span>
          </h2>
          <h2>
            open for <span id={"new-opportunities"} className="gradient-background-text new-opportunities"><a
             target='_blank'
              href="https://www.linkedin.com/in/lars-christian-frassle-792695264/">
                 new opportunities</a></span>
          </h2>
          <hr className="long-line" />
          <div>
            <div >
              <img
                src="/assets/images/JavaScript-logo.png"
                alt="javascript logo"
                className="logo"
              />
              <img
                src="/assets/images/node-js-icon-1817x2048-g8tzf91e.png"
                alt="nodejs logo"
                className="logo"
              />
              <img
                src="/assets/images/Postgresql_elephant.svg.png"
                alt="Postgresql logo"
                className="logo"
              />
              <img
                src="/assets/images/React-icon.svg.png"
                alt="React logo"
                className="logo"
              />
              <img
                src="/assets/images/Typescript_logo_2020.svg.png"
                alt="typescript logo"
                className={"logo logo-spin"}
              />
            </div>
          </div>
          <div className="row justify-content-center ">
          <a href="#photography"
           className="text-button"><button
            className="button-find-out"
             id="find-out-more">
              
                <p>Find out more about me </p>
              
            </button>
            </a>
          </div>
        </div>
      </section>
      <section className={"photography"}>
        <a id={'photography'}></a>
          <div className='text-container'>
        <h2>I'm a hobby <span className='gradient-background-text'>photographer.</span></h2>
        <hr className="shorter-line" />
        <p className={"text-photography"}>
          I love photography because it lets me appreciate beauty of light, color, and composition.
           The process of taking your time and soaking in the environment to find a composition is
            my favourite thing about it.</p>
                <h3>Check out some of my photography in my custom made React gallery!</h3>
                </div>
        <div className='gallery-container'>
      <ModalGallery key={nanoid()} galleryInfo={test} colorMode='dark' />
      </div>
      </section>
      <footer>
        <div>
          <p>©{new Date().getFullYear()} Lars Frassle </p>
        </div>
      </footer>
    </>
  );
}

export default App
