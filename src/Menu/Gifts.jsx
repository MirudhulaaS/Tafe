import React from 'react'
import Card from '@mui/material/Card';
import Order from '../components/Order';

const Gifts = () => {
  return (
    <Card className="menu-container" style={{backgroundColor: '#fffdf4'}}>
        <Order />
        <h1 className="order-title">Gifts</h1>
    </Card>
  )
}

export default Gifts