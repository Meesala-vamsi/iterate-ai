import Header from "../../components/Header/Header"

import achievement from "../../Assets/img_achievement.webp"
import googlePlay from "../../Assets/img_playstore_logo.svg"
import appStore from "../../Assets/img_appstore_logo.svg"
import homeMandir from "../../Assets/home-mandhir.webp"
import pujaSeva from "../../Assets/ic_puja_seva.svg"
import astro from "../../Assets/ic_astro.svg"
import chandhavaSeva from "../../Assets/ic_chadhava_seva.svg"
import festivals from "../../Assets/ic_festivals.svg"
import music from "../../Assets/ic_music.svg"
import mandirDharshan from "../../Assets/ic_mandir_darshan.svg"
import "./Home.css"

const Home=()=>{
  return(
    <div>
    <Header/>
    <div className="home-container">
      <div className="banner-container">
        <div className="home-left-container">
          <div className="acheivement-container">
            <img src={achievement} alt="" />
            <p>WORLD’S LARGEST APP FOR HINDU DEVOTEES</p>
          </div>
          <h2 className="">Pray daily with <span className="">Sri Mandir</span>.One App for all your devotional needs.</h2>
          <div className="stores-container">
            <img src={googlePlay} alt="playstore" className="playstore-image" />
            <img src={appStore} alt="appStore" className="playstore-image" />
          </div>
        </div>
      <div className="home-right-container">
        <img src={homeMandir} alt="banner-image" className="banner-image" />
      </div>
      </div>
      <div className="explore-container">
        <h3>Explore Sri Mandir</h3>
        <ul className="explore-list-container">
          <li>
            <img src={pujaSeva} alt="" />
            <p>Book Pujas at Temples</p>
          </li>
          <li>
            <img src={astro} alt="astro" />
            <p>Talk to Astrologers</p>
          </li>
          <li>
            <img src={chandhavaSeva} alt="chandhavaseva" />
            <p>Offer Chandhava at Temples</p>
          </li>
          <li>
            <img src={festivals} alt="festivals"  />
            <p>Read Festival Details</p>
          </li>
          <li>
            <img src={music} alt="music" />
            <p>Listen to Divine Music</p>
          </li>
          <li>
            <img src={mandirDharshan} alt="mandirDarshan" />
            <p>Do Mandir Darshan</p>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}


export default Home