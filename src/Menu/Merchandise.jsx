import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Order from '../components/Order';

const Merchandise = () => {

    return (
        <Card className="menu-container" style={{backgroundColor: '#e4f4fa'}}>
            <Order />
            <h1 className="order-title">Merchandise</h1>
            <div className="col-4">
                <Card className="tea-card">
                    <img src="cups/cup-1.jpeg" alt="Green Tea" className="cup-img" />
                    <h1 className="tea-title">Pink Mug</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="cups/cup-2.jpg" alt="Plain Tea" className="cup-img" />
                    <h1 className="tea-title">Brown Mug</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="cups/cup-5.jpeg" alt="Lemon Tea" className="cup-img" />
                    <h1 className="tea-title">Green Mug</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="cups/cup-4.jpg" alt="Ginger Tea" className="cup-img" />
                    <h1 className="tea-title">White Mug</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="cups/cup-13.jpeg" alt="White Tea" className="cup-img" />
                    <h1 className="tea-title">350ML Cup</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="cups/cup-6.webp" alt="Matcha Tea" className="cup-img" />
                    <h1 className="tea-title">Chai Glass</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="cups/cup-7.jpeg" alt="Black Tea" className="cup-img" />
                    <h1 className="tea-title">Indian Chai Glass</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="cups/cup-8.jpeg " alt="Oolong Tea" className="cup-img" />
                    <h1 className="tea-title">Diamond-cut Chai Glass</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="cups/cup-9.jpeg" alt="Chamomile Tea" className="cup-img" />
                    <h1 className="tea-title">Turkish Chai Glass</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card" >
                    <img src="cups/cup-10.jpeg" alt="Rooibos Tea" className="cup-img" />
                    <h1 className="tea-title">Chinese Chai Glass</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="cups/cup-11.jpeg" alt="Lavender Tea" className="cup-img" />
                    <h1 className="tea-title">Clay Mug</h1>
                    <br/>
                    <h1 className="tea-price">Rs.300.00</h1>
                    <button className="btn" type="button">Buy</button>
                    <br/><br/>
                </Card>
                <br/>
                <Card className="tea-card">
                    <img src="cups/cup-12.webp" alt="Yellow Tea" className="cup-img" />
                    <h1 className="tea-title">Japanese Chai Mug</h1>
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

export default Merchandise