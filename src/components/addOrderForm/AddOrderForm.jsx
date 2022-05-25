import React, {useEffect, useState} from 'react';
import AddOrderTable from '../addOrderTable/AddOrderTable';
import { useProduct  } from '../../components/context/products';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { registerOrder } from '../FirebaseConfig';

import "./AddOrderForm.css"

const inputs = document.querySelectorAll('#formulario input');


inputs.forEach((input) => {
    input.addEventListener('keyup',() => {
        console.log('tecla levantada')
    });
})

const AddOrderForm = (cargo) => {
    const patterns = {
        namePattern:/^(?=.{3,39}$)[A-Z][a-z]+(?: [A-Z][a-z]+)+$/g,
        companyPattern:/^(?=.*[a-zA-Z])([A-Z a-z\d]|[^ ]){3,39}$/i
    }
    const [order, setOrder] = useState("Orden:")
    const [total, setTotal] = useState(0)

    const { register,formState:{ errors }, handleSubmit }=useForm();

    let {id} = useParams();

    const {productsData} = useProduct(); 

    let navigate = useNavigate();

    const fechaActual = new Date()
    const añoActual = fechaActual.getFullYear();
    const hoy = fechaActual.getDate();
    const mesActual = fechaActual.getMonth() + 1; 
    
    let path ="/"+cargo;
    //
    const date = (hoy+"/"+mesActual+ "/"+añoActual);
    const companyProducts = id
    let filterproducts = productsData.filter(item  => item.data.company === companyProducts)
    //
    const filtrarproductos = (nameCompany) =>{
        filterproducts = productsData.filter(item  => item.data.company === nameCompany)
    }

    //const filterproducts = productsData.filter(item  => item.data.company === "coca cola")
    useEffect(()=>{
        filtrarproductos(companyProducts);
      },[]);

    const addProduct = () => {
        {filterproducts.map(({data,cant}) =>( 
            setOrder(order + "(product: " + data.name +", " + cant + ")"),
            setTotal(total + cant)
            ))} 
    }

    const cleanProduct = () => (
            setOrder("Order: "),
            setTotal(0)
    )

    const onSubmit = (data) => {
        registerOrder(date, data.place,data.seller,order,companyProducts,0,data.details);
        navigate(path, {replace: true});
    };


    return(
        
        <div class="container-fluid d-flex justify-content-center">
        <form onSubmit={ handleSubmit(onSubmit)} id="formulario" className='flex-fill container-fluid d-flex justify-content-center '>
            <div className=' d-flex justify-content-center'>
                <div className="flex-fill d-flex justify-content-center form-AddOrder-bg">
                    <div className="d-flex justify-content-center pt-5 row form-AddOrder-bg">
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
                                    <label for="name" class="form-label" >Vendededor</label>
                                    <br />
                                    <input type="text" className='input-addProduct-form' 
                                    {...register("seller",{ 
                                        required:true,
                                        maxLength:40,
                                        minLength:3,
                                        pattern:patterns.namePattern
                                    })}
                                    />{errors.seller && "Nombre de vendedor requerido"}
                                    <p className="forms-input-error"> El nombre del vendedor solo acepta caracteres alfabeticos</p>
                                </div>
                                <div class="mb-3" id="grupo-nombre">
                                    <label for="name" class="form-label" >Punto de venta</label>
                                    <br />
                                    <input type="text" className='input-addProduct-form' 
                                    {...register("place",{ 
                                        required:true,
                                        maxLength:40,
                                        minLength:3,
                                        pattern:patterns.companyPattern
                                    })}
                                    />{errors.place && "Nombre de empresa requerido"}
                                    <p className="forms-input-error"> El punto de venta solo acepta caracteres alfabeticos</p>
                                </div>
                                <div class="mb-3" id="grupo-nombre">
                                    <label for="name" class="form-label" >Detalle</label>
                                    <br />
                                    <input type="text" className='input-addProduct-form' 
                                    {...register("details",{ 
                                        required:true,
                                        maxLength:40,
                                        minLength:3,
                                    })}
                                    />{errors.details && "Detalle de orden requerido"}
                                    <p className="forms-input-error"> El Detalle solo acepta caracteres alfabeticos</p>
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
                                    <button className="btn btn-form-editCompany" type="button"  data-bs-toggle="modal" data-bs-target="#orderDetails"  onClick={() => addProduct()}>
                                                Realizar Pedido
                                    </button>         
                                </div>
                            </div>
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
                              Empresa: {companyProducts}
                            </p>
                            <p className="text-center">
                              Fecha: {date}
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
                              Total: {total} <br />
                           </p>                       
                          </div>
                          <div className='col-12 d-flex justify-content-evenly modal-del-btns'>
                              <button  type="submit"  class="btn modal-del-btn " data-bs-dismiss="modal" onClick={()=>{
                                        {errors.seller?.type === 'required' &&
                                        errors.place?.type === 'required' &&
                                        errors.details?.type === 'required' &&
                                        alert("Todos los campos son requeridos")
                                        /*navigate(-1)*/}
                                    }} >Aceptar</button>
                              <button type="button" class="btn modal-del-btn" data-bs-dismiss="modal" onClick={() => cleanProduct()}>Cancelar</button>
                            </div>
                      </div>
                  </div>
                    </div>
                  </div>
                </div>

                </div>
                </div>
            </form>
        </div>

    );
}

export default AddOrderForm;