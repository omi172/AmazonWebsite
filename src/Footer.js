import React, { useState, useMemo } from 'react';
import {
  Tabs,
  Tab,
  Box,
  Menu,
  MenuItem,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { FixedSizeList } from 'react-window';
import Select from 'react-select';
import countryList from 'react-select-country-list';

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function renderRow(props) {
  const { index, style } = props;
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

function VirtualizedList() {
  return (
    <Box sx={{ width: '35%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}>
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}

export default function Footer() {
  const [tabValue, setTabValue] = useState('one');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const options = useMemo(() => countryList().getData(), []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(window.location.href)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`,
    instagram: `https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="footer tabs"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab value="one" label="Get to Know Us" />
        <Tab value="two" label="Connect with Us" />
        <Tab value="three" label="Make Money with Us" />
        <Tab value="four" label="Let Us Help You" />
        <Tab value="five" label="Language" />
        <Tab value="six" label="Country" />
      </Tabs>

      <Box sx={{ mt: 2 }}>
        {tabValue === 'one' && <VirtualizedList />}

        {tabValue === 'two' && (
          <>
            <Box sx={{ mb: 1 }}>
              <Button variant="contained"  onClick={handleClick}>Contact Us</Button>
            </Box>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={() => window.open(shareLinks.facebook, '_blank')}>
                <FacebookIcon sx={{ mr: 1 }} /> Facebook
              </MenuItem>
              <MenuItem onClick={() => window.open(shareLinks.whatsapp, '_blank')}>
                <WhatsAppIcon sx={{ mr: 1 }} /> WhatsApp
              </MenuItem>
              <MenuItem onClick={() => window.open(shareLinks.twitter, '_blank')}>
                <TwitterIcon sx={{ mr: 1 }} /> Twitter
              </MenuItem>
              <MenuItem onClick={() => window.open(shareLinks.instagram, '_blank')}>
                <InstagramIcon sx={{ mr: 1 }} /> Instagram
              </MenuItem>
            </Menu>
          </>
        )}

        {tabValue === 'three' && <p>Make money with us</p>}
        {tabValue === 'four' && <p>Let us help you</p>}
        {tabValue === 'five' && <p>Select Language</p>}

        {tabValue === 'six' && (
          <>
            <Select options={options} value={selectedCountry} onChange={handleCountryChange} />
            <p>Select Country</p>
          </>
        )}
      </Box>
    </Box>
  );
}
