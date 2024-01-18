import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Order from '../components/Order';

const Western = () => {

    const [expanded, setExpanded] = useState(false);

    const toggleDescription = () => {
      setExpanded(!expanded);
    };
  
    const cardStyle = {
      backgroundColor: 'white',
      height: expanded ? 'auto' : '300px', 
      overflow: 'hidden',
      transition: 'height 0.3s ease',
    };


    return (
        <Card className="menu-container" style={{backgroundColor: '#e9fae4'}}>
            <Order />
            <h1 className="order-title">Special Chai</h1>
            <div className="col-4">
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-1.jpeg" alt="Green Tea" className="tea-img" />
                <h1 className="tea-title">Green Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Green tea is renowned for its health benefits, boasting a rich antioxidant profile that combats oxidative stress and inflammation. Linked to improved heart health by reducing bad cholesterol and enhancing cognitive function through the synergy of caffeine and L-theanine, green tea also aids weight management by boosting metabolism. Its potential cancer-fighting properties, positive impact on type 2 diabetes management, and support for oral and liver health make it a valuable addition to a healthy lifestyle. With anti-inflammatory effects and a potential role in longevity, green tea stands out as a versatile beverage promoting overall well-being.'
                    : 'Green tea is renowned for its health benefits, boasting a rich antioxidant profile that combats oxidative stress and inflammation. Linked to improved heart health by...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                <br/>
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-2.webp" alt="Plain Tea" className="tea-img" />
                <h1 className="tea-title">Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to improved cardiovascular health and a lowered risk of stroke. With a moderate caffeine content, black tea can enhance mental alertness and concentration. Additionally, compounds in black tea may have antimicrobial properties, promoting better oral health. Enjoying plain chai as part of a balanced diet may contribute to overall well-being.'
                    : 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                <br/>
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-3.jpeg" alt="Lemon Tea" className="tea-img" />
                <h1 className="tea-title">Lemon Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to improved cardiovascular health and a lowered risk of stroke. With a moderate caffeine content, black tea can enhance mental alertness and concentration. Additionally, compounds in black tea may have antimicrobial properties, promoting better oral health. Enjoying plain chai as part of a balanced diet may contribute to overall well-being.'
                    : 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                <br/>
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-4.jpeg" alt="Ginger Tea" className="tea-img" />
                <h1 className="tea-title">Ginger Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to improved cardiovascular health and a lowered risk of stroke. With a moderate caffeine content, black tea can enhance mental alertness and concentration. Additionally, compounds in black tea may have antimicrobial properties, promoting better oral health. Enjoying plain chai as part of a balanced diet may contribute to overall well-being.'
                    : 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                <br/>
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-5.jpeg" alt="White Tea" className="tea-img" />
                <h1 className="tea-title">White Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to improved cardiovascular health and a lowered risk of stroke. With a moderate caffeine content, black tea can enhance mental alertness and concentration. Additionally, compounds in black tea may have antimicrobial properties, promoting better oral health. Enjoying plain chai as part of a balanced diet may contribute to overall well-being.'
                    : 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-6.jpeg" alt="Matcha Tea" className="tea-img" />
                <h1 className="tea-title">Matcha Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to improved cardiovascular health and a lowered risk of stroke. With a moderate caffeine content, black tea can enhance mental alertness and concentration. Additionally, compounds in black tea may have antimicrobial properties, promoting better oral health. Enjoying plain chai as part of a balanced diet may contribute to overall well-being.'
                    : 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                <br/>
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-7.avif" alt="Black Tea" className="tea-img" />
                <h1 className="tea-title">Black Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to improved cardiovascular health and a lowered risk of stroke. With a moderate caffeine content, black tea can enhance mental alertness and concentration. Additionally, compounds in black tea may have antimicrobial properties, promoting better oral health. Enjoying plain chai as part of a balanced diet may contribute to overall well-being.'
                    : 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                <br/>
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-8.jpeg" alt="Oolong Tea" className="tea-img" />
                <h1 className="tea-title">Oolong Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to improved cardiovascular health and a lowered risk of stroke. With a moderate caffeine content, black tea can enhance mental alertness and concentration. Additionally, compounds in black tea may have antimicrobial properties, promoting better oral health. Enjoying plain chai as part of a balanced diet may contribute to overall well-being.'
                    : 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                <br/>
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-9.jpeg" alt="Chamomile Tea" className="tea-img" />
                <h1 className="tea-title">Chamomile Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to improved cardiovascular health and a lowered risk of stroke. With a moderate caffeine content, black tea can enhance mental alertness and concentration. Additionally, compounds in black tea may have antimicrobial properties, promoting better oral health. Enjoying plain chai as part of a balanced diet may contribute to overall well-being.'
                    : 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                <br/>
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-10.jpeg" alt="Rooibos Tea" className="tea-img" />
                <h1 className="tea-title">Rooibos Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to improved cardiovascular health and a lowered risk of stroke. With a moderate caffeine content, black tea can enhance mental alertness and concentration. Additionally, compounds in black tea may have antimicrobial properties, promoting better oral health. Enjoying plain chai as part of a balanced diet may contribute to overall well-being.'
                    : 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-11.jpeg" alt="Lavender Tea" className="tea-img" />
                <h1 className="tea-title">Lavender Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to improved cardiovascular health and a lowered risk of stroke. With a moderate caffeine content, black tea can enhance mental alertness and concentration. Additionally, compounds in black tea may have antimicrobial properties, promoting better oral health. Enjoying plain chai as part of a balanced diet may contribute to overall well-being.'
                    : 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                <br/>
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-12.jpeg" alt="Yellow Tea" className="tea-img" />
                <h1 className="tea-title">Yellow Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to improved cardiovascular health and a lowered risk of stroke. With a moderate caffeine content, black tea can enhance mental alertness and concentration. Additionally, compounds in black tea may have antimicrobial properties, promoting better oral health. Enjoying plain chai as part of a balanced diet may contribute to overall well-being.'
                    : 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                <br/>
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-13.jpeg" alt="Hibiscus Tea" className="tea-img" />
                <h1 className="tea-title">Hibiscus Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to improved cardiovascular health and a lowered risk of stroke. With a moderate caffeine content, black tea can enhance mental alertness and concentration. Additionally, compounds in black tea may have antimicrobial properties, promoting better oral health. Enjoying plain chai as part of a balanced diet may contribute to overall well-being.'
                    : 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                <br/>
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-14.jpeg" alt="Peppermint Tea" className="tea-img" />
                <h1 className="tea-title">Peppermint Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to improved cardiovascular health and a lowered risk of stroke. With a moderate caffeine content, black tea can enhance mental alertness and concentration. Additionally, compounds in black tea may have antimicrobial properties, promoting better oral health. Enjoying plain chai as part of a balanced diet may contribute to overall well-being.'
                    : 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                <br/>
                <Card className="tea-card" style={cardStyle}>
                <img src="tea-15.jpeg" alt="Cinnamon Tea" className="tea-img" />
                <h1 className="tea-title">Cinnnamon Chai</h1>
                <br/>
                <h1 className="tea-price">Rs.300.00</h1>
                <button className="btn" type="button">Buy</button>
                <br/><br/>
                <p className="desc">
                    {expanded
                    ? 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to improved cardiovascular health and a lowered risk of stroke. With a moderate caffeine content, black tea can enhance mental alertness and concentration. Additionally, compounds in black tea may have antimicrobial properties, promoting better oral health. Enjoying plain chai as part of a balanced diet may contribute to overall well-being.'
                    : 'Rich in antioxidants like theaflavins and catechins, black tea helps combat oxidative stress and reduce the risk of heart diseases. Regular consumption may contribute to...'}
                </p>
                <Button onClick={toggleDescription} style={{ color: 'green' }}>
                    {expanded ? 'Read Less' : 'Read More'}
                </Button>
                </Card>
                
            </div>
        </Card>

    )
}

export default Western