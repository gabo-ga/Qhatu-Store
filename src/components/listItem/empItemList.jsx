import React, { useEffect, useState } from 'react';
import { deleteCompany } from '../FirebaseConfig';

import "./empItemList.css"
import "../modal/companyModal.css"

const EmpItemList = (props) => {
    const [userData,setUserData]= useState([]);
    let tableNumber=0;

    const handleClick= () =>{
      deleteCompany(props.id);
    }

  const ColorSelect = (props) => {
    if (props%2 > 0){
      tableNumber += 1
      return true
    }else{
      tableNumber += 1
      return false
    }
  }

  return (
    <div className="container-fluid p-0 ">
        <div className={ ColorSelect() ?"emp-item-list-1 row p-0" : "emp-item-list-2 row p-0"}>
            <div className="col-6 col-lg-8 d-flex align-items-center">
                <p className='m-0 item-name'>Empresa: {props.name}</p>
            </div>
            <div className="col-lg-2 col-3 d-flex align-items-center">
              <button type='button' class="btn" data-bs-toggle="modal" data-bs-target="#editEmp">
                <img className='img-edit' 
                src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/lapiz.png?alt=media&token=9e834e4f-8b4d-42af-bf4a-ef08deae3cd0" 
                alt="" />
              </button>
            </div>
            <div className="col-lg-2 col-3 d-flex align-items-center">
              <button  type='button' class="btn" data-bs-toggle="modal" data-bs-target="#delEmp">
                <img className='img-del'
                src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/basurero.png?alt=media&token=5378bed1-9615-4b17-8d70-942ed0829678"
                alt="" />
              </button>
            </div>
        </div>
        
        <div class="modal fade " id="delEmp" tabindex="-1" aria-labelledby="delEmp" aria-hidden="true">
                <div className='d-flex d-flex justify-content-center'>
                <div class="modal-dialog modal-body-edit">
                  <div class="modal-content modal-body-edit">
                    <div class="modal-body  d-flex justify-content-center">
                    <div className='modal-del-container'>
                        <div className='row'>
                          <div className='col-12 p-0 text-center '>
                            <div className='modal-del-header'>
                              ¿Seguro que desea eliminar la empresa?
                            </div>
                          </div>
                          <div className='col-12 modal-del-data text-center'>
                            <p>
                              Empresa: {props.name}  
                            </p>
                            <p>
                               Representante: {props.representativeName}
                           </p>
                          </div>
                          <div className='col-12 d-flex justify-content-evenly modal-del-btns'>
                              <button type="button" class="btn modal-del-btn" data-bs-dismiss="modal"
                              onClick={() => handleClick()}
                              >Eliminar</button>
                              <button type="button" class="btn modal-del-btn" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                      </div>
                  </div>
                    </div>
                  </div>
                </div>

                </div>
        </div>
        <div class="modal fade " id="editEmp" tabindex="-1" aria-labelledby="editEmp" aria-hidden="true">
                <div className='d-flex justify-content-center'>
                <div class="modal-dialog modal-body-del ">
                  <div class="modal-content modal-body-del">
                    <div class="modal-body  d-flex justify-content-center">
                    <div className='modal-del-container'>
                        <div className='row'>
                          <div className='col-12 p-0 text-center '>
                            <div className='modal-del-header'>
                              ¿Seguro que desea editar la empresa?
                            </div>
                          </div>
                          <div className='col-12 modal-del-data text-center'>
                            <p>
                              Empresa: {props.name}    
                            </p>
                            <p>
                              Representante: {props.representativeName}
                           </p>
                          </div>
                          <div className='col-12 d-flex justify-content-evenly modal-del-btns'>
                              <button type="button" class="btn modal-del-btn">Editar</button>
                              <button type="button" class="btn modal-del-btn" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                      </div>
                  </div>
                    </div>
                  </div>
                </div>

                </div>
        </div>
    </div>
  );
}

export default EmpItemList