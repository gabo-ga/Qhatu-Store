import React from 'react';
import ListUsersTable from '../../components/usersTable/listUsersTable';
import PerfilCard from '../../components/perfilCard/perfilCard';
import Footer from '../../components/fotter/footer'
import Navbar from '../../components/navbar/navbar'


import { Link } from 'react-router-dom';

//estilos
import './supervisoProfile.css'

const supervisorProfile = () => {
  return (
    <div className='container-fluid  p-0'>
        <Navbar></Navbar>
        <div className='img-banner-suprv p-0'>
            <img
              src="https://www.journeygazer.com/wp-content/uploads/2019/03/Moraine-lake-destination.jpg"/>
          </div>
        <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-8 col-12 col-table d-flex justify-content-center order-2 order-xl-1'>
            <div>
              <div className='table_background shadow'>
                <div className='container-fluid p-0'>
                  <div className='row d-flex justify-content-center'>

                    <div className='col-12 d-flex justify-content-lg-center justify-content-center order-2'>
                      <Link to='/supervisor/createuser'>
                        <button type="button" class="btn btn-supv-profile table-item button-item-det">
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
          <div className='col-xl-4 col-12 col-profile order-1 order-xl-2 pr-0'>
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
                  <button type="button" class="btn btn-supv-profile">Administrar usuario</button>
                </div>
                <div className='col-xl-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <Link to="/supervisor/registercompany">
                    <button type="button" class="btn btn-supv-profile">Añadir empresa</button>
                  </Link>
                </div>   
              </div>
            </div>
          </div>
        </div>

        </div>
        <Footer></Footer>
    </div>
  )
}

export default supervisorProfile