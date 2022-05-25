import React from "react";
import { deleteProduct } from "../FirebaseConfig";

import './product.css'

const Product = (props) => {
    let id = props.id
    const handleClick= (id) =>{
        deleteProduct(id);
    }

    return(
        <div className="col-lg-4 col-6  d-flex justify-content-center product-container">
            <div className="product-item">
                <div className="product-image">
                    <img src={props.src} alt="imagen del producto"/>
                </div>
                <p>{props.name}</p>
                <p>{props.precio}</p>
                <button type="button" class="btn btn-add-product" data-bs-toggle="modal" data-bs-target={`#delProduct-${id}`}>Eliminar</button>
            </div>
            <div class="modal fade " id={`delProduct-${id}`} tabindex="-1" aria-labelledby={`delProduct-${id}`} aria-hidden="true">
                <div className='d-flex d-flex justify-content-center'>
                <div class="modal-dialog modal-body-edit d-flex justify-content-center">
                  <div class="modal-content modal-body-edit">
                    <div class="modal-body  d-flex justify-content-center">
                    <div className='modal-del-container'>
                        <div className='row'>
                          <div className='col-12 p-0 text-center '>
                            <div className='modal-del-header'>
                              ¿Seguro que desea eliminar este producto?
                            </div>
                          </div>
                          <div className='col-12 modal-del-data text-center'>
                            <p>
                              Producto: {props.name}  
                            </p>
                            <p>
                               Compañia: {props.company} 
                           </p>
                          </div>
                          <div className='col-12 d-flex justify-content-evenly modal-del-btns'>
                              <button type="button" class="btn modal-del-btn" data-bs-dismiss="modal"
                              onClick={() => handleClick(id)}
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
        </div>
    )
}

export default Product