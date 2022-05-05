import React from 'react';
import ListUsersTable from '../../components/usersTable/listUsersTable';
import PerfilCard from '../../components/perfilCard/perfilCard';
import Footer from '../../components/fotter/footer'
import Navbar from '../../components/navbar/navbar'


import { Link, useLocation} from 'react-router-dom';
//estilos
import './administratorProfile.css'


const AdministratorProfile = () => {
  let location = useLocation();
  return (
    <div className='container-fluid p-0'>
        <Navbar></Navbar>
        <div className='img-banner-admin p-0'>
            <img
              src="https://www.journeygazer.com/wp-content/uploads/2019/03/Moraine-lake-destination.jpg"/>
          </div>
        <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-8 col-12 col-table d-flex justify-content-center order-2 order-xl-1'>
            <div>
              <div className='table_background shadow'>
                <div className='container-fluid p-0 '>
                  <div className='row d-flex justify-content-center'>

                    <div className='col-12 d-flex justify-content-xl-center  justify-content-center order-2'>
                      <Link to='/administrator/createuser'>
                        <button type="button" class="btn btn-admin-profile table-item button-item-det">
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
            <PerfilCard cargo="Administrador" name={location.state.name}></PerfilCard>
            </div>
            <div className='buttons-colection'>
              <div className='row'>
                {/*
                <div className='col-xl-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <button type="button" class="btn btn-v1">Administrar catalogo</button>
                </div>
                */}
                <div className='col-lg-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <button type="button" class="btn btn-admin-profile">Administrar usuario</button>
                </div> 
                <div className='col-lg-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <Link to="/administrator/admincompany">
                    <button type="button" class="btn btn-admin-profile">Administrar empresa</button>
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

export default AdministratorProfile