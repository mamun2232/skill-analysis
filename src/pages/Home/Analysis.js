import React from 'react';
import banner from '../../Picture/Banner.jpg'
import './Custom.css'

const Analysis = () => {
      return (
            <div>
                  <div class="card card-compact w-full bg-base-100 shadow-xl">
                        <figure className=''><img className='w-full' src={banner} alt="banner" /></figure>
                        <div class="card-body">
                              <div className="analysis grid lg:grid-cols-3 grid-cols-1 gap-5 ">
                                    {/* card 1  */}
                                    <div class="card w-96 bg-base-100 shadow-xl border-4">
                                          <div class="card-body">
                                              
                                                <p className='text-xl'>Web Develoment Skill</p>
                                          </div>
                                    </div>
                                    {/* card 2  */}
                                    <div class="card w-96 bg-base-100 shadow-xl border-4">
                                          <div class="card-body">
                                                
                                          <p className='text-xl'>App Develoment Skill</p>
                                          </div>
                                    </div>

                                    {/* card - 3 */}
                                    <div class="card w-96 bg-base-100 shadow-xl border-4">
                                          <div class="card-body">
                                                
                                          <p className='text-xl'>Over Develoment Skill</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Analysis;