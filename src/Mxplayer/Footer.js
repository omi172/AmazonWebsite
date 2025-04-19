import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Footer() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 1520 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="What is Amazon miniTV ?" {...a11yProps(0)} />
          <Tab label="The features of Amazon miniTV" {...a11yProps(1)} />
          <Tab label="Stream latest Web Series, Short Films & other videos" {...a11yProps(2)} />
          <Tab label="Watch hundreds of popular Web Series, Short Films & other videos for free" {...a11yProps(3)} />
          <Tab label="How to access Amazon miniTV?" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
      Amazon miniTV, launched in May 2021, is a free, ad-supported video platform with an exclusive app and website. It offers a vast range of the latest,
       trending, and immersive content across various genres. Consider exploring Amazon miniTV online for a rich viewing experience.
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
      The platform has a host of exciting features meant to make your viewing experience exceptional.
       It is user-friendly, so you can easily explore various titles as you browse through the site.
        You can search for any show you want, add your favorite shows to watchlist and binge watch with auto-play of next episode. 
        You can access popular web series, short films, and videos for free.
         Plus, the streaming platform supports ads instead of paid subscriptions to provide free access for everyone.
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
      Experience the best of entertainment with Amazon miniTV in India. With our streaming services, you never have to miss out on the latest web series, movies, and other captivating videos. Some of the recent titles include Campus Beats, Half Love Half Arranged, and Half CA.
       Unlock a world of free content with a dash of fleeting ads. 
       Embrace a new form of entertainment with no strings attached — watch Amazon miniTV today!
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
      With miniTV’s video streaming services, you can indulge in a vast library of popular drama and comedy series such as Aspirants, Yeh Meri Family, Physics Wallah, Swagger Sharma's Lucky Guy etc. The platform is also host to captivating short films, all accessible at no cost. Our extensive collection caters to diverse interests for everyone to have an enriching viewing experience. 
      From engaging storylines in Korean dramas to thought-provoking Turkish content & 
      romantic web series to celebrity hosted reality shows such as Hip Hop India, the Amazon miniTV free platform has something for everyone.
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
      miniTV content is a free, ad-supported video streaming service available in India only.
       miniTV content is accessible on iOS 14 and above, Android OS version 6 and above,
        Fire TV devices updated to the latest software version, and on all major web browsers. 
        Accessing Amazon miniTV online is a breeze. 
        Download the Amazon shopping application from the iOS or Android app store, 
        open the app and click on miniTV icon on the top right side of the homepage.
       Likewise, to watch on a larger screen, visit www.amazon.in/minitv on your laptop.
      </TabPanel>
    </Box>
  );
}
