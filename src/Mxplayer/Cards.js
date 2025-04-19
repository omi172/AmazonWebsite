import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FiHeart } from 'react-icons/fi';
import { MdFavorite } from "react-icons/md";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cards({ title, img }) {
  const [expanded, setExpanded] = useState(false);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);

  const handleClick = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl1(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleOptionClick = (option) => {
    console.log('Option selected:', option);
    handleClose();
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
    handleClose2();
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(window.location.href)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`,
    instagram: `https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}` 
  };

  return (
    <div className='sudo'>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
      />
      <CardMedia
        component="img"
        height="172"
        image={img}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* Optional description */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share" onClick={handleClick2}>
          <ShareIcon />
        </IconButton>
        <Menu anchorEl={anchorEl2} open={open2} onClose={handleClose2}>
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
        </ExpandMore>
      </CardActions>
    </Card>
    </div>
  );
}
