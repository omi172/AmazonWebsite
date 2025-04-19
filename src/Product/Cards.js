import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
  marginLeft: 'auto',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cards({ title, img }) {
  const [expanded, setExpanded] = useState(false);
  const [anchorE1, setAnchorE1] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);

  const open1 = Boolean(anchorE1);
  const open2 = Boolean(anchorE2);

  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE1(null);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const handleOptionClick = (option) => {
    console.log('Option selected:', option);
    handleClose();
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
    handleClose2();
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(window.location.href)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`,
    instagram: `https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}` 
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorE1}
              open={open1}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 48 * 4.5,
                  width: '20ch',
                },
              }}
            >
              <MenuItem onClick={() => handleOptionClick('Buy')}>Buy</MenuItem>
              <MenuItem onClick={() => handleOptionClick('Gift')}>Gift</MenuItem>
            </Menu>
          </>
        }
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* Optional content here */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="share" onClick={handleClick2}>
          <ShareIcon />
        </IconButton>
        <Menu anchorEl={anchorE2} open={open2} onClose={handleClose2}>
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

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* You can add an expand icon like ExpandMoreIcon here */}
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
