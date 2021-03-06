import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import LodaingSpiner from './LodaingSpiner';
import WebSkillRow from './WebSkillRow';

const WebDevelopment = () => {
      const navigate = useNavigate()
      const [skills, setSkill] = useState([])

      useEffect(() => {
            fetch('https://limitless-cliffs-91893.herokuapp.com/webSkill')
                  .then(res => res.json())
                  .then(data => setSkill(data))
      }, [skills])

      // const { data: skills, isLoading, refetch } = useQuery('/webSkill', () => fetch('https://limitless-cliffs-91893.herokuapp.com/webSkill').then(res => res.json()))



      // if(isLoading){
      //       return <LodaingSpiner></LodaingSpiner>
      // }

      const adedFeildHendeler = () => {
            setSkill([...skills, { name: "" }])

            fetch('https://limitless-cliffs-91893.herokuapp.com/skill', {
                  method: "POST",
                  headers: {
                        'Content-type': 'application/json;',
                  },
                  body: JSON.stringify({ skills })


            }
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                  })
            )

      }







      return (
            <div className='max-w-7xl m-auto px-3 my-10'>
                  <h1 className='text-2xl text-center'>Chouse Your Web Development Skills</h1>

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
                                                skills.map(skill => <WebSkillRow
                                                      key={skill._id}
                                                      skill={skill}



                                                ></WebSkillRow>

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
                                    <p className='btn' onClick={adedFeildHendeler} >Add item</p>
                              </div>


                        </div>
                  </div>

                  <div className="confrom-btn text-right">
                        <button className='btn' onClick={() => navigate('/')} >Done</button>
                  </div>
            </div>
      );
};

export default WebDevelopment;