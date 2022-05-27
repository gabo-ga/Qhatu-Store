import React from 'react';
import UsersTable from '../../components/usersTable/usersTable';
import PerfilCard from '../../components/perfilCard/perfilCard';
import Footer from '../../components/fotter/footer'
import Navbar from '../../components/navbar/navbar'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

//estilos
import './supervisoProfile.css'

const SupervisorProfile = () => {
  let {name} = useParams();
  return (
    <div className='container-fluid  p-0'>
        <Navbar></Navbar>
        <div className='img-banner-suprv'>
            <img
              src="https://www.journeygazer.com/wp-content/uploads/2019/03/Moraine-lake-destination.jpg"/>
        </div>
        <div className='container-fluid'>
          <div className='row'>
          <div className='col-xxl-8 col-12 col-table d-flex justify-content-center order-2 order-xxl-1'>
            <div>
              <div className='table_background-supv shadow'>
                <div className='container-fluid p-0 '>
                  <div className='row d-flex justify-content-center'>
                    {/*
                    <div className='col-lg-4 col-8 order-1'>
                      <input  class="form-control table-input"
                       placeholder="Nombre Empresa/Vendedores"></input>
                    </div>

                    <div className='col-lg-4 col-4 d-flex justify-content-xl-start  justify-content-end order-2'>
                      <button type="button" class="btn btn-v1 table-item button-item-det">Buscar
                      </button>
                    </div>
                        
                    <div className='col-lg-4 col-6 d-flex justify-content-end justify-content-xl-center order-4 order-xl-3'>
                      <button type="button" class="btn  table-print-button
                            d-flex justify-content-between align-items-center">
                        <label>Imprimir</label> 
                        <img className='table-print-img' 
                                src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/icons8-imprimir-50.png?alt=media&token=67e811c3-27da-4768-8514-e4321b5a6db2"/>
                      </button>
                    </div>

                    <div className='col-lg-12 col-6 order-3 order-xl-4 d-flex justify-content-xl-start  justify-content-start'>
                      <button type="button" class=" btn table-item">Filtros         
                      </button>
                    </div>
                    */}
                    <div className='col-12 table-container  order-5'>
                      <UsersTable></UsersTable>
                    </div>
                  </div>
                </div>
              </div>
  
            </div>
            
          </div>
          <div className='col-xxl-4 col-12 col-profile order-1 order-xxl-2 '>
            <div className='d-flex justify-content-center'>
              <PerfilCard cargo="Supervisor" name={name}></PerfilCard>
            </div>
            <div className='buttons-colection'>
              <div className='row'>
                {/*
                <div className='col-xl-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <button type="button" class="btn btn-v1">Administrar catalogo</button>
                </div>
                */}
                <div className='col-xl-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <Link to="/supervisor/adminuser">
                    <button type="button" class="btn btn-supv-profile">Administrar Usuario</button>
                  </Link>
                </div>
                <div className='col-xl-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <Link to="/supervisor/registercompany">
                    <button type="button" class="btn btn-supv-profile">Añadir Empresa</button>
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

export default SupervisorProfile