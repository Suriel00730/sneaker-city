import React from 'react';
import FrontCover from '../../images/home.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <Link to='/'>
                <h1 className='title'>Inicio</h1>
            </Link>
            <img src={FrontCover} alt='home' />
        </div>
    )
}

export default Home