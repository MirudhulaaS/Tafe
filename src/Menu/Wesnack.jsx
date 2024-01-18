import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Order from '../components/Order';

const Wesnack = () => {

    return (
        <Card className="menu-container" style={{backgroundColor: '#fae9ff'}}>
            <Order />
            <h1 className="order-title">Cookies & Desserts</h1>
            <div className="col-4">
                <Card className="tea-card">
                    <img src="tea-1.jpeg" alt="Green Tea" className="tea-img" />
                    <h1 className="tea-title">Green Chai</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="tea-2.webp" alt="Plain Tea" className="tea-img" />
                    <h1 className="tea-title">Chai</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="tea-3.jpeg" alt="Lemon Tea" className="tea-img" />
                    <h1 className="tea-title">Lemon Chai</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="tea-4.jpeg" alt="Ginger Tea" className="tea-img" />
                    <h1 className="tea-title">Ginger Chai</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="tea-5.jpeg" alt="White Tea" className="tea-img" />
                    <h1 className="tea-title">White Chai</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="tea-6.jpeg" alt="Matcha Tea" className="tea-img" />
                    <h1 className="tea-title">Matcha Chai</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="tea-7.avif" alt="Black Tea" className="tea-img" />
                    <h1 className="tea-title">Black Chai</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="tea-8.jpeg" alt="Oolong Tea" className="tea-img" />
                    <h1 className="tea-title">Oolong Chai</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="tea-9.jpeg" alt="Chamomile Tea" className="tea-img" />
                    <h1 className="tea-title">Chamomile Chai</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card" >
                    <img src="tea-10.jpeg" alt="Rooibos Tea" className="tea-img" />
                    <h1 className="tea-title">Rooibos Chai</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="tea-11.jpeg" alt="Lavender Tea" className="tea-img" />
                    <h1 className="tea-title">Lavender Chai</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="tea-12.jpeg" alt="Yellow Tea" className="tea-img" />
                    <h1 className="tea-title">Yellow Chai</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
            </div>
        </Card>
    )
}

export default Wesnack