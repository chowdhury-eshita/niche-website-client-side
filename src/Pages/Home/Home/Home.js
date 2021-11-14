import React from 'react';
import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import Guide from '../Guide/Guide';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
const Home = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Banner></Banner>
            <Products></Products>
            <Article></Article>
            <Guide></Guide>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;