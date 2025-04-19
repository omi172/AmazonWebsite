import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import ImageSlider from '../Slider/ImageSlider.js'
import Cards from './Cards.js'
import "./Mxplayer.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Footer from './Footer.js';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3'
    },
  ];
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div>
    <Box sx={{ width: '100%', typography: 'body1' }} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab 
              icon={<img src="./images/MX_Player_Logo.png" alt="Home" style={{ width: 160, height: 20 }} />} 
              iconPosition="start"
              value="1" 
            />
            <Tab label="New & Hot" value="2" />
            <Tab label="Web Series" value="3" />
            <Tab label="Movies" value="4" />
            <Tab label="VDesi" value="5" />
            <Tab label="Romance" value="6" />
            <Tab label="Comedy" value="7" />
            <Tab label="Tamil" value="8" />
            <Tab label="Telugu" value="9" />
          </TabList>
        </Box>
        
      </TabContext>
    </Box>
    <div className="slide-container">
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div key={index}>
          <ImageSlider slides = {slideImage.url} />
        </div>
      ))} 
    </Slide>
    </div>
  
      <div style={{ padding: "20px", backgroundColor: "black" }}>
          <h2 style={{ color: "white", marginBottom: "10px" }}>Continue Watching</h2>
          
          <Slider {...settings}>
            <div>
              <Cards title= "Jamnapar" img= "./images/jamnapar.jpg" />
            </div>
            <div>
              <Cards title= "Laakho Me Ek" img= "./images/laakhoMeEk.jpg" />
            </div>
            <div>
              <Cards title= "Crime Aaj Kal" img= "./images/crimeAajKal.jpg" />
            </div>
            <div>
              <Cards title= "Miss Lucky Go" img= "./images/missLuckyGgo.jpg" />
            </div>
            <div>
              <Cards title= "Sister Hood" img= "./images/sisterHood.jpg" />
            </div>
            <div>
              <Cards title="Nama Cool" img="/images/namaCool.jpg" />
            </div>
          </Slider>
        </div>
    <div style={{ padding: "20px", backgroundColor: "black" }}>
          <h2 style={{ color: "white", marginBottom: "10px" }}>Trending Top 10</h2>
          
          <Slider {...settings}>
            <div>
              <Cards title="PlayGround" img="/images/playGround.jpg" />
            </div>
            <div>
              <Cards title="Our Secret" img="/images/ourSecret.jpg" />
            </div>
            <div>
              <Cards title="Girl Friend" img="/images/girlFriend.jpg" />
            </div>
            <div>
              <Cards title="Hitman Agent June" img="/images/hitman.jpg" />
            </div>
            <div>
              <Cards title="School Friends" img="/images/schoolFriends.jpg" />
            </div>
            <div>
              <Cards title="Trust Issues" img="../images/trustIssues.jpg" />
            </div>
            <div>
              <Cards title="My Lethal Man" img="../images/myLethalMan.jpg" />
            </div>
            <div>
              <Cards title="My Deskmate" img="../images/myDeskmate.jpg" />
            </div>
            <div>
              <Cards title="Girl Who Sees Smells" img="../images/girlsWhoSeeSmells.jpg" />
            </div>
          </Slider>
        </div>
        <div style={{ padding: "20px", backgroundColor: "black" }}>
          <h2 style={{ color: "white", marginBottom: "10px" }}>Popular Web Series</h2>
          
          <Slider {...settings}>
            <div>
              <Cards title="Heartbeats" img="/images/heartBeats.jpg" />
            </div>
            <div>
              <Cards title="Half Love Half Arranged" img="/images/halfLovesHalfArranged.jpg" />
            </div>
            <div>
              <Cards title="Half CA" img="/images/halfCA.jpg" />
            </div>
            <div>
              <Cards title="Who is Your Gynac" img="/images/gynac.jpg" />
            </div>
            <div>
              <Cards title="Yeh Meri Family" img="/images/schoolFriends.jpg" />
            </div>
            <div>
              <Cards title="Dil Logical" img="../images/dilLogical.jpg" />
            </div>
            <div>
              <Cards title="Crushed" img="../images/crushed.jpg" />
            </div>
            <div>
              <Cards title="Physic Wallah" img="../images/physicsWallah.jpg" />
            </div>
            <div>
              <Cards title="Gutar Gu" img="../images/GutarGu.jpg" />
            </div>
            <div>
              <Cards title="Please Find Attached" img="../images/pleaseFindAttached.jpg" />
            </div>
            <div>
              <Cards title="Campus Beat" img="../images/campusBeat.jpg" />
            </div>
          </Slider>
        </div>
        <Footer />
   </div>
  );
}

