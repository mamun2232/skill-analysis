import React from 'react';
import Analysis from './Analysis';
import Footer from './Footer';
import Header from './Header';

const Home = () => {
      return (
            <div className='max-w-7xl m-auto px-3'>
                 <Header></Header>
                 <Analysis></Analysis>
                 <Footer></Footer>
            </div>
      );
};

export default Home;