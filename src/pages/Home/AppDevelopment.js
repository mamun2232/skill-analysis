import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import LodaingSpiner from './LodaingSpiner';
import AppSkillRow from './AppSkillRow'

const AppDevelopment = () => {
      const navigate = useNavigate()

      const { data: skills, isLoading, refetch } = useQuery('/appSkill', () => fetch('http://localhost:5000/appSkill').then(res => res.json()))
      
     

      if(isLoading){
            return <LodaingSpiner></LodaingSpiner>
      }

      return (
            <div className='max-w-7xl m-auto px-3 my-10'>
                  <h1 className='text-2xl text-center'>Chouse Your App Development Skills</h1>

                  <div className="all-skills mx-auto my-10">
                        <div class="overflow-x-auto">
                              <table class="table w-full ">
                                    {/* <!-- head --> */}
                                    <thead>
                                          <tr>

                                                <th>Your Skill</th>
                                                <th>Selected</th>

                                          </tr>
                                    </thead>
                                    <tbody>
                                          {/* <!-- row 1 --> */}
                                          {
                                                skills.map(skill => <AppSkillRow
                                                key={skill._id}
                                                skill={skill}
                                                refetch={refetch}
                                                
                                                ></AppSkillRow>  
                                                      
                                                      )
                                          }
                                                                                    


                                          {/* <tr>
                                                <th>Css</th>
                                                <td>
                                                <input onClick={() => setSelected(!selected)} type="checkbox" checked={selected} class="checkbox checkbox-accent" />

                                                </td>

                                          </tr> */}
                                          


                                    </tbody>
                              </table>
                              <div className='my-5'>
                              <p>Add item</p>
                              </div>


                        </div>
                  </div>

                  <div className="confrom-btn text-right">
                        <button className='btn' onClick={()=> navigate('/')} >Done</button>
                  </div>
            </div>
      );
};

export default AppDevelopment;