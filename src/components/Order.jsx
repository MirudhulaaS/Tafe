import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';

const Order = () => {

  return (
    <Card className="slide">
        <div className="slide-col">
          <Link to="/indian">
            <img src="tea/indian.jpeg" alt="Indian Chai" className="slide-img" />
          </Link>
          <Link to="/western">
            <img src="tea/western.jpeg" alt="Western Tea" className="slide-img" />
          </Link>
          <Link to="/insnack">
            <img src="tea/snacks.avif" alt="Snacks" className="slide-img" />
          </Link>
          <Link to="/wesnack">
            <img src="tea/cookies.jpeg" alt="Cookies" className="slide-img" />
          </Link>
          <Link to="/merchandise">
            <img src="tea/cups.jpg" alt="Cups" className="slide-img" />
          </Link>
          <Link to="/gifts">
            <img src="tea/teagift.webp" alt="Tea Gift" className="slide-img" />
          </Link>
        </div>
    </Card>
  )
}

export default Order