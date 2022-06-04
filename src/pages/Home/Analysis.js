import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import banner from '../../Picture/Banner.jpg'
import './Custom.css'
import LodaingSpiner from './LodaingSpiner';

const Analysis = () => {
      const navigate = useNavigate()
   
   
      const { data: skills, isLoading, refetch } = useQuery('/webSkill', () => fetch('http://localhost:5000/webSkill').then(res => res.json()))
      console.log(skills);

      if(isLoading){
            return <LodaingSpiner></LodaingSpiner>
      }

      // 

      
     




      return (
            <div>
                  <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure className=''><img className='w-full' src={banner} alt="banner" /></figure>
                        <div class="card-body">


                              

                              <div className="analysis grid lg:grid-cols-3 grid-cols-1 gap-5 ">
                                    {/* card 1  */}

                                    
                                    
                                    <div onClick={()=> navigate('/webDevelopment')} class="card w-96 bg-base-100 shadow-xl border-4 cursor-pointer">
                                          <div class="card-body">

                                              
                                          <p className='text-xl'>Web Development Skill</p>
                                          </div>
                                    </div>
                                    {/* card 2  */}
                                    <div
                                    onClick={()=> navigate('/appDevelopment')}
                                    
                                    class="card w-96 bg-base-100 shadow-xl border-4">
                                          <div class="card-body">
                                                
                                          <p className='text-xl'>App Development Skill</p>
                                          </div>
                                    </div>

                                    {/* card - 3 */}
                                    <div class="card w-96 bg-base-100 shadow-xl border-4">
                                          <div class="card-body">
                                                
                                          <p className='text-xl'>Over Development Skill</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Analysis;