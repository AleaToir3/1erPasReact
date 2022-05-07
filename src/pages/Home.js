import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Countries from '../components/Countries';

const Home = () => {
    return (
        <div className='Countries'>
            <Logo />
            <Navigation />
            <Countries />
            <p>Home.js c'est ici </p>
        </div>
    );
};

export default Home;