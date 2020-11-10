import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Landscapes from './Pages/Landscapes';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className='hero-container'>
        <h1>JQ Photography</h1>
        <div className="hero-btns">
            <Link to='/Surf' className='btn-mobile'>
                <Button
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                Surf
            </Button>
            </Link>
            <Link to='/Landscapes' className='btn-mobile'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={console.log(Landscapes)}>
                Landscapes
                </Button>
            </Link>
            <Link to='/About' className='btn-mobile'>
                <Button
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                About
                </Button>
            </Link>
            </div>   
        </div>
    );
}

export default HeroSection;
