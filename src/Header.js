import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css';

function Header() {
  const [email, setEmail] = useState('');
  const auth = getAuth();
  

  const placeholderText = [
    "Search for products",
    "Enter your products",
    "Type to search",
    "What are you looking for?"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholderText[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholderText.length);
    }, 2000); // Change placeholder every 2 seconds

    return () => clearInterval(intervalId);
  }, [placeholderText]);

  useEffect(() => {
    setCurrentPlaceholder(placeholderText[currentIndex]);
  }, [currentIndex, placeholderText]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      } else {
        setEmail('');
      }
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [auth]);

  return (
    <div className="header">
      <img className="header_logo" src="./images/amazonIn.png" alt="amazonLogo" style={{ height: '60px' }} />
      <div className="header_search">
      <input className="header_searchInput" type="text" placeholder={currentPlaceholder}/>
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello {email === '' ? 'Guest' : email}</span>
          <Link to="/Login">
            <span className="header_optionLineTwo">{email === '' ? 'Sign In' : 'Sign out'}</span>
          </Link>
        </div>
        <div className="header_option">
        <Link to="/YourOrders">
           <span className="header_optionLineOne">Returns  & Orders</span>
         </Link>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link>
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwoHeader_BasketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
