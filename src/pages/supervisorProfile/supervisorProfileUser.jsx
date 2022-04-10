import React from 'react';
import ListUsersTable from '../../components/usersTable/listUsersTable';
import PerfilCard from '../../components/perfilCard/perfilCard';
import { Link } from 'react-router-dom';

//estilos
import './supervisoProfile.css'

const supervisorProfile = () => {
  return (
    <div className='container-fluid'>
        <div className='row p-0'>
          <div className='img-banner p-0'>
            <img
              src="https://www.journeygazer.com/wp-content/uploads/2019/03/Moraine-lake-destination.jpg"/>
          </div>
          
        </div>
        <div className='row'>
          <div className='col-xl-8 col-12 col-table d-flex justify-content-center order-2 order-xl-1'>
            <div>
              <div className='table_background shadow'>
                <div className='container-fluid p-0 '>
                  <div className='row d-flex justify-content-center'>

                    <div className='col-lg-4 col-4 d-flex justify-content-xl-start  justify-content-end order-2'>
                      <Link to='/supervisor/createuser'>
                        <button type="button" class="btn btn-v1 table-item button-item-det">
                          Registrar Usuario
                        </button>
                      </Link>
                    </div>
                    
                    <div className='col-12 table-container  order-5'>
                      <ListUsersTable></ListUsersTable>
                    </div>


                  </div>
                </div>
              </div>
  
            </div>
            
          </div>

          <div className='col-xl-4 col-12 col-profile order-1 order-xl-2'>
            <div className='d-flex justify-content-center'>
              <PerfilCard cargo="Supervisor"></PerfilCard>
            </div>
            <div className='buttons-colection'>
              <div className='row'>
                {/*
                <div className='col-xl-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <button type="button" class="btn btn-v1">Administrar catalogo</button>
                </div>
                */}
                <div className='col-xl-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <button type="button" class="btn btn-v1">Administrar usuario</button>
                </div>
                <div className='col-xl-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <Link to="/supervisor/registercompany">
                    <button type="button" class="btn btn-v1">Añadir empresa</button>
                  </Link>
                </div>   
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default supervisorProfile