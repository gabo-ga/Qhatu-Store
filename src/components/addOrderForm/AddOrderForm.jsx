import React, {useEffect, useState} from 'react';
import AddOrderTable from '../addOrderTable/AddOrderTable';
import { useProduct  } from '../../components/context/products';

import "./AddOrderForm.css"

const inputs = document.querySelectorAll('#formulario input');


inputs.forEach((input) => {
    input.addEventListener('keyup',() => {
        console.log('tecla levantada')
    });
})

const AddOrderForm = (props) => {
    const {productsData} = useProduct(); 
    const fechaActual = new Date()
    const añoActual = fechaActual.getFullYear();
    const hoy = fechaActual.getDate();
    const mesActual = fechaActual.getMonth() + 1; 
    const date = (hoy+"/"+mesActual+ "/"+añoActual);
    const companyProducts = "fast food"


    let filterproducts = productsData.filter(item  => item.data.company === companyProducts)
    
    const filtrarproductos = (nameCompany) =>{
        filterproducts = productsData.filter(item  => item.data.company === nameCompany)
    }

    //const filterproducts = productsData.filter(item  => item.data.company === "coca cola")
    useEffect(()=>{
        filtrarproductos(companyProducts);
      },[]);

    const onSubmit= () => {
    };


    return(
        
        <div class="container-fluid d-flex justify-content-center">
            <div className='form-AddOrder-bg d-flex justify-content-center'>
                <div className="row flex-fill d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center pt-5">
                        <form ñ id="formulario" className='flex-fill row '>
                            <div className='col-12 col-lg-6'>
                                <div>
                                    <div class="mb-3" id="grupo-nombre">
                                        <label for="name" class="form-label" >Nombre de la empresa</label>
                                        <br />
                                        <label for="name" class="form-label" >{companyProducts}</label>
                                    </div>
                                    <div class="mb-3">
                                        <label for="direction" class="form-label" name="direccion">Fecha</label>
                                        <br />
                                        <label for="direction" class="form-label" name="direccion">{date}</label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <div class="mb-3" id="grupo-nombre">
                                    <label for="name" class="form-label" >Detalle</label>
                                    <br />
                                    <input type="text" className='input-addProduct-form' />
                                </div>
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <div className='form-AddOrder-list-bg shadow d-flex justify-content-center'>
                                    <div className='container-fluid p-0 '>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-12 table-container order-5'>
                                                <AddOrderTable></AddOrderTable>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 '>
                                <div className="boton m-0">
                                    <button className="btn btn-form-editCompany" type="button"  data-bs-toggle="modal" data-bs-target="#orderDetails">
                                                Realizar Pedido
                                    </button>         
                                </div>
                            </div>
                        </form>
                    </div>
                </div>           
            </div>
            <div class="modal fade" id="orderDetails" tabindex="-1" aria-labelledby="orderDetails" aria-hidden="true">
                <div className='d-flex justify-content-center'>
                <div class="modal-dialog modal-orderData-body d-flex justify-content-center">
                  <div class="modal-content modal-orderData-body ">
                    <div class="modal-body  d-flex justify-content-center">
                    <div className='modal-orderData-container'>
                        <div className='row'>
                          <div className='col-12 p-0 text-center '>
                            <div className='modal-del-header'>
                              Confirmacion de pedido
                            </div>
                          </div>
                          <div className='col-12 modal-del-data'>
                            <p className="text-center">
                              Empresa:   
                            </p>
                            <p className="text-center">
                              Fecha: 
                           </p>
                           <div className="p-5 container-fluid">
                            {filterproducts?.map(({id,data,cant}) =>( 
                                <div key={id} className="row">
                                    <div  className="col-6">
                                        <p >Producto: {data.name}</p>
                                    </div>
                                    <div  className="col-6 text-center">
                                        <p >Cantidad: {cant}</p>
                                    </div>
                                </div>
                                ))} 
                           </div>
                            <p className="text-center">
                              Total: 
                           </p>                       
                          </div>
                          <div className='col-12 d-flex justify-content-evenly modal-del-btns'>
                              <button type="button" class="btn modal-del-btn " data-bs-dismiss="modal">Aceptar</button>
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

export default AddOrderForm;