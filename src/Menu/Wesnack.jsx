import React from 'react'
import Card from '@mui/material/Card';
import Order from '../components/Order';

const Wesnack = () => {
  return (
    <Card className="menu-container" style={{backgroundColor: '#fffdf4'}}>
        <Order />
        <h1 className="order-title">Western Snacks</h1>
    </Card>
  )
}

export default Wesnack