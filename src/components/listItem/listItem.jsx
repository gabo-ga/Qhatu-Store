import React from 'react'
import './listItem.css'

const listItem = () => {
  return (
    <div className='container-fluid p-0'>
        <div className='row item-list-table'>
            <div className='col-4 item-list-id'>
                PEDIDO #59
            </div>
            <div className='col-8 item-list-data'>
                <p>Empresa: Coca cola</p>
                <p>Detalle: Pedido de refesco</p>
                <p>Fecha de pedido: 30/03/2022</p>
            </div>
        </div>
    </div>
  )
}

export default listItem