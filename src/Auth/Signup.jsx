import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FiEye, FiEyeOff } from 'react-icons/fi'; 

const Signup = () => {

    const [formData, setFormData] = useState({
        username: '',
        mobile: '',
        password: '',
        cpassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }; 

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.username && formData.mobile && formData.password && formData.cpassword) {
        // Get existing data from local storage
        const existingData = JSON.parse(localStorage.getItem('UserData')) || [];

        // Check if the username already exists
        const existingUserIndex = existingData.findIndex(
            (user) => user.username === formData.username
        );

        if (existingUserIndex !== -1) {
            // Update the password if the username already exists
            existingData[existingUserIndex].password = formData.password;
        } else {
            // Add new user data to the array
            existingData.push({
            username: formData.username,
            mobile: formData.mobile,
            password: formData.password,
            cpassword: formData.cpassword,
            });
        }

        // Store updated data back in local storage
        localStorage.setItem('UserData', JSON.stringify(existingData));

        console.log('Form submitted!');
        console.log('Username:', formData.username);
        console.log('Password:', formData.password);

        // Navigate to the home page
        // navigate('/dashboard'); 
        } else {
        console.error('Invalid credentials');
        }
    };
    

    return (     
        <Card className="menu-container" style={{backgroundColor: '#fffdf4'}}><br/>
            <Card className="custom-card">
                <CardContent>
                    <h1 className="title">Sign Up</h1>
                    <br/>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="label">USERNAME</label>
                            <input
                                className="input"
                                type="text"
                                name="username"
                                placeholder="Enter Email ID"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label className="label">MOBILE</label>
                            <input
                                className="input"
                                type="text"
                                name="mobile"
                                placeholder="Enter Mobile Number"
                                value={formData.mobile}
                                onChange={handleChange}
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label className="label">CREATE PASSWORD</label>
                            <div className="password-input-container">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="input password-input"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <span className="password-icon" onClick={togglePasswordVisibility}>
                                    {showPassword ? <FiEye /> : <FiEyeOff />}
                                </span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="label"> CONFIRM PASSWORD</label>
                            <div className="password-input-container">
                                <input
                                    className="input password-input"
                                    name="cpassword"
                                    placeholder="Re-enter Password"
                                    value={formData.cpassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <p className="signin">Already have an account? <Link to="/login">Login</Link></p>
                        <br/>
                        <div>
                            <button type="submit" className="submit-button"><a href="#signup"></a>Signup</button>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <br/>
            
        </Card>
    );
}

export default Signup;
