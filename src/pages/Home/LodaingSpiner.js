import React from 'react';
import Loding from '../../Picture/Loding.gif'

const LodaingSpiner = () => {
      return (
            <div className='flex h-screen justify-center items-center'>
                  <img src={Loding} alt="" />
            </div>
      );
};

export default LodaingSpiner;