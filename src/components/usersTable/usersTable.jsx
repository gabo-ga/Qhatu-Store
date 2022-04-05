import React from 'react'
import './usersTable.css'

const usersTable = () => {
  return (
    <div className='table_background shadow'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-4'>
                  <input type="email" class="form-control" id="exampleInputEmail1" 
                  aria-describedby="emailHelp" placeholder="Nombre Empresa/Vendedores"></input>
                </div>
                <div className='col-4'>
                  <button type="button" class="btn btn-v1 table-item button-item-det">Buscar
                  </button></div>
                <div className='col-4 d-flex justify-content-end'>
                  <button type="button" class="btn  table-item">Imprimir</button></div>
                <div className='col-12'>
                  <button type="button" class=" btn table-item">Filtros</button></div>
                <div className='col-12'>
                    <div className='users-table border'>

                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default usersTable