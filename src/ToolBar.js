import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

export default function LabTabs() {
  const [value, setValue] = useState('1');
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      } else {
        setEmail('');
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 2 }}>
          <Avatar src="/broken-image.jpg" />
          <h6>{email || 'Sign In'}</h6>
        </Stack>
        <b>Trending</b>
        {['BestSellers', 'New Releases', 'Movers and Shakers'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <b>Digital Content and Devices</b>
        {[
          'Amazon miniTV-FREE entertainment',
          'Echo & Alexa',
          'Fire Tv',
          'Kindle E_readers & eBooks',
          'Audible AudioBooks',
          'Amazon Prime Video',
          'Amazon Prime Music',
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <b>Shop by Category</b>
        {[
          'Mobiles, Computers',
          'Tv,Appliances,Electronics',
          'Mens Fashion',
          'Womens Fashion',
          'Home,Kitchen,Pets',
          'Beauty,Health,Grocery',
          'Sports,Fitness,Bags,Luggage',
          'Toys,Baby Products,Kids Fashion',
          'Car,MotorBike,Industrial',
          'Books',
          'Movies,Music,Video Games',
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <b>Programs & Features</b>
        {[
          'Amazon Pay',
          'Gift Cards & Mobile Recharges',
          'Amazon Launchpad',
          'Amazon Business',
          'HandLoom and Handicraft',
          'Amazon Saheli',
          'Amazon Custom',
          'Flight Tickets',
          'Buy More,Save more',
          'Clearance store',
          'International Brands',
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <b>Help & Settings</b>
        {['Your Account', 'Customer Service', 'Sign Out'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'orange' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <div>
              <Button onClick={toggleDrawer(true)}>
                <Tab label="ALL" value="1" />
                <MoreVertIcon />
              </Button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
            </div>
            <Tab label="Fresh" value="2" />
            <Tab label="Keep Shopping For" value="3" />
            <Link to="/Mxplayer">
             <Button onClick={toggleDrawer(true)}>
                <Tab label="MX Player" value="4" />
            </Button>
            </Link>
            
            <Tab label="Sell" value="5" />
            <Tab label="Amazon Pay" value="6" />
            <Tab label="Gift Cards" value="8" />
            <Tab label="Buy Again" value="9" />
            <Tab label="Amazon Basics" value="10" />
            <Tab label="Gift Ideas" value="11" />
            <Tab label="Books" value="12" />
            <Tab label="Home Improvement" value="13" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
