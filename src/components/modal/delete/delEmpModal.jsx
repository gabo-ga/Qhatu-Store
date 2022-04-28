import React from 'react'
import './delEmpmodal.css'

const delEmpModal = () => {
  return (
    <div className='container-fluid d-flex justify-content-center'>
        <div className='modal-del-container d-flex d-flex justify-content-center'>
            <div className='row'>
                <div className='col-12 p-0 text-center '>
                    <div className='modal-del-header'>
                    ¿Seguro que desea eliminar la empresa?
                    </div>
                </div>
                <div className='col-12 modal-del-data text-center'>
                    <p>
                        Empresa: Coca cola   
                    </p>
                    <p>
                        Representante: Carlos Saenz
                    </p>
                </div>
                <div className='col-12 d-flex justify-content-evenly modal-del-btns'>
                    <button type="button" class="btn modal-del-btn">Eliminar</button>
                    <button type="button" class="btn modal-del-btn">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default delEmpModal