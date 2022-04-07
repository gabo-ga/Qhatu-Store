import React from 'react'
import ListItem from '../listItem/listItem'

import './usersTable.css'

const usersTable = () => {
  return (
    <div className="table_background shadow">
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                  <input type="email" class="form-control" id="exampleInputEmail1" 
                  aria-describedby="emailHelp" placeholder="Nombre Empresa/Vendedores"></input>
                </div>
                <div className="col-4">
                  <button type="button" class="btn btn-v1 table-item button-item-det">Buscar
                  </button></div>
                  
                <div className="col-4 d-flex justify-content-end">
                  <button type="button" class="btn  table-print-button
                  d-flex justify-content-between align-items-center">
                    <label>Imprimir</label>  
                    <img className="table-print-img" 
                    src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/icons8-imprimir-50.png?alt=media&token=67e811c3-27da-4768-8514-e4321b5a6db2"/>
                  </button>
                </div>

                <div className="col-12">
                  <button type="button" class=" btn table-item">Filtros
                  </button></div>

                <div className="col-12">
                    <div className="users-table border">
                      <ListItem color="1"/>
                      <ListItem color="2"/>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default usersTable