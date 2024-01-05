import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';

const Order = () => {

  return (
    <Card className="slide">
        <div className="slide-col">
          <Link to="/western">
            <img src="western.jpeg" alt="Western Tea" className="slide-img" />
          </Link>
          <Link to="/wesnack">
            <img src="cookies.jpeg" alt="Cookies" className="slide-img" />
          </Link>
          <Link to="/indian">
            <img src="indian.jpeg" alt="Indian Chai" className="slide-img" />
          </Link>
          <Link to="/insnack">
            <img src="snacks.avif" alt="Snacks" className="slide-img" />
          </Link>
          <Link to="/merchandise">
            <img src="cups.jpg" alt="Cups" className="slide-img" />
          </Link>
          <Link to="/gifts">
            <img src="teagift.webp" alt="Tea Gift" className="slide-img" />
          </Link>
        </div>
    </Card>
  )
}

export default Order