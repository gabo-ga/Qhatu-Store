import React from 'react'
import './perfilCard.css'
const perfilCard = () => {
  return (
    <div className='card_back shadow'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col  d-flex justify-content-center'>
            <img src="https://www.tuexperto.com/wp-content/uploads/2015/07/perfil_01.jpg" 
            class="image-profile rounded-circle"></img>
          </div>
          <div className='col text-center'>
            <p className='card-details'>Jose armando alvarez caredo</p>
            <p className='card-details'>Cargo: supervisor</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default perfilCard