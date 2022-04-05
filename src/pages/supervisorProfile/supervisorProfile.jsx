import React from 'react'
import UsersTable from '../../components/usersTable/usersTable'
import PerfilCard from '../../components/perfilCard/perfilCard'

//estilos
import './supervisoProfile.css'

const supervisorProfile = () => {
  return (
    <div className='container-fluid border'>
        <div className='row p-0'>
          <div className='img-banner p-0'>
            <img
              src="https://www.journeygazer.com/wp-content/uploads/2019/03/Moraine-lake-destination.jpg" 
              alt="" />
          </div>
          
        </div>
        <div className='row'>
          <div className='col-8 col-table d-flex justify-content-center'>
            <div><UsersTable></UsersTable></div>
            
          </div>
          <div className='col-4 col-profile'>
            <div className='d-flex justify-content-center'>
              <PerfilCard></PerfilCard>
            </div>
            <div className='buttons-colection'>
              <div className='col-12 d-flex justify-content-center buttons-colection-item'>
                <button type="button" class="btn btn-v1">Administrar catalogo</button>
              </div>
              <div className='col-12 d-flex justify-content-center buttons-colection-item'>
                <button type="button" class="btn btn-v1">Añadir usuario</button>
              </div>
              <div className='col-12 d-flex justify-content-center buttons-colection-item'>
                <button type="button" class="btn btn-v1">Añadir empresa</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default supervisorProfile