import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../../App.css';

class Surf extends React.Component {
    render () {

        const images = [
        {
            original: './src/Images/air.jpg',
            thumbnail: './src/Images/air.jpg',
        },
        {
            original: './src/Images/boogbarrell.jpg',
            thumbnail: './src/Images/boogbarrell.jpg',
        },
        {
            original: './src/Images/dunes2.jpg',
            thumbnail: '.src/Images/dunes2.jpg',
        },
        {
            original: './src/Images/glassbarrel.jpg',
            thumbnail: './src/Images/glassbarrel.jpg',
        },
        {
            original: './src/Images/glass.jpg',
            thumbnail: './src/Images/glass.jpg',
        },
        {
            original: './src/Images/moodybarrel.jpg',
            thumbnail: './src/Images/moodybarrel.jpg',
        },
    ];

        return (
        <ImageGallery items={images} />
        );
    }
}
export default Surf;
