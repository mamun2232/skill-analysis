import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppSkillRow = ({skill , refetch}) => {

      const navigate = useNavigate()

      


      const { _id, name, seleted } = skill


      const selectedHundeler = (id) => {

           
            fetch(`https://limitless-cliffs-91893.herokuapp.com/appSkill/${id}`, {
                  method: 'PATCH',
                
                  headers: {
                        'Content-type': 'application/json;',
                  },
            })
                  .then(res => res.json())
                  .then(data => {
                        refetch()
                  });

      }

      const updatelSectedHundeler = (id) => {
            console.log(id);
            fetch(`https://limitless-cliffs-91893.herokuapp.com/appSkillUpdate/${id}`, {
                  method: 'PATCH',
                
                  headers: {
                        'Content-type': 'application/json;',
                  },
            })
                  .then(res => res.json())
                  .then(data => {
                        refetch()
                  });

      }
      return (
            <div>
                    <tr className='border-5'>
                        <td className='w-full'>{name}</td>
                        <td>

                              <div class="form-control">

                                    {
                                          seleted ? <input type="checkbox"
                                          onClick={()=> updatelSectedHundeler(_id)}
                                                checked="checked" class="checkbox checkbox-accent" />

                                                :
                                                <input

                                                      type="checkbox"

                                                      onClick={() => selectedHundeler(_id)} class="checkbox checkbox-accent" />

                                    }


                              </div>
                        </td>
                  </tr>
            </div>
      );
};

export default AppSkillRow;