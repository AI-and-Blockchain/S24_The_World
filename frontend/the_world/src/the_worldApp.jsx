import {useState} from 'react';
import {CONTENT_INFO} from './content.js';
import "./the_worldApp.css";

function the_worldApp() {
  const [open, setOpen] = useState(false)
  const [menuName, setMenuName] = useState("mainpage")
  return (
    <div className="App">
      <section className={open?"main-structure active":"main-structure"}>
        <header>
            <a href="#">
                <div className="logo">The world</div>
            </a>
            <div className="menu-logo" onClick={()=>{
              setOpen(!open)
            }}></div>
        </header>
        <div className="content">
          <video className = {menuName === "mainpage"?"active":""} src="/assets/videos/mainpage2.mp4" autoPlay muted loop></video>
          <video className = {menuName === "Photographer"?"active":""} src="/assets/videos/Photographer.mp4" autoPlay muted loop></video>
          <video className = {menuName === "Buyer"?"active":""} src="/assets/videos/mainpage.mp4" autoPlay muted loop></video>
          <div className="video-overlay"></div>
          <section className="text-description">
             <h1>{CONTENT_INFO[menuName].h1}</h1>
             <h2>{CONTENT_INFO[menuName].h2}</h2>
             <p>{CONTENT_INFO[menuName].p}</p>
             {/* <a href="#">Explore</a> */}
             <a href="../photographer/page.tsx">Explore</a>
          </section>
        </div>
        <footer>
            <a href="#"><img src="/assets/icons/facebook.svg" alt="facebook"/></a>
            <a href="#"><img src="/assets/icons/instagram.svg" alt="instagram"/></a>
            <a href="#"><img src="/assets/icons/twitter.svg" alt="twitter"/></a>
        </footer>
      </section>
      <section className="aside-menu">
        <button onClick={()=>(
          setMenuName("mainpage")
        )}>The world</button>
        <button onClick={()=>(
          setMenuName("Photographer")
        )}>Photographer</button>
        <button onClick={()=>(
          setMenuName("Buyer")
        )}>Buyer</button>
      </section>
    </div>
  );
}

export default the_worldApp;