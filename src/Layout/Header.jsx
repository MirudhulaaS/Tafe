import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <div>
      <Card>
        <img src="Tafe.png" alt="Tafe Logo" className="logo" />
        <CardContent>
          <Typography variant="p" component="div" className="container">
            <p>Tafe</p>
          </Typography>
        </CardContent>
        <div className="topnav">
          <Link to="/">Home</Link>
          <Link to="/order">Order</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Profile</Link>
        </div>
      </Card>
      
    </div>
  );
};

export default Header;



// import React from 'react';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

// const Header = () => {
//   return (
//     <div>
//       <img src="Tafe.png" alt="Tafe Logo" className="logo" />
//       <CardContent>
//         <Typography variant="p" component="div" className="container">
//           <p>Tafe</p>
//         </Typography>
//       </CardContent>

//       <div className="topnav">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#order">Order</a>
//         <a href="#contact">Contact</a>
//         <a href="#login">Login</a>
//       </div>
//     </div>
//   );
// };

// export default Header;
