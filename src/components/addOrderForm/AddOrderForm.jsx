import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import {onGetCompany} from '../FirebaseConfig';
import { useNavigate } from "react-router-dom";

import UsersTable from '../../components/usersTable/usersTable'
import ListUsersTable from '../companiesTable/listCompaniesTable';
import AddOrderTable from '../addOrderTable/AddOrderTable';

import "./AddOrderForm.css"

const inputs = document.querySelectorAll('#formulario input');

const patterns = {
    namePattern:/^(?=.{3,39}$)[A-Z][a-z]+(?: [A-Z][a-z]+)+$/g,
    companyPattern:/^(?=.*[a-zA-Z])([A-Z a-z\d]|[^ ]){3,39}$/i,
    phonePattern:/^[6-7][0-9]{8}$/i,
    directionPattern: /^(?=.*[a-zA-Z])(?!.*[!$%()=?¡¿'¨"´+[~^`{}*])(?!.*[\t\n])([A-Z a-z\d]|[^ ]){3,39}$/i
}

inputs.forEach((input) => {
    input.addEventListener('keyup',() => {
        console.log('tecla levantada')
    });
})

const AddOrderForm = (props) => {
    const [companyData,setCompanyData]= useState([]);
    const getCompanyById = async (id) => {
        try {
          const doc = await onGetCompany(id);
          setCompanyData({ ...doc.data() });
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(()=>{
        getCompanyById(props.id);
      },[]);

    const { register,formState:{ errors }, handleSubmit }=useForm();
    let navigate = useNavigate();
    const onSubmit= (data) => {
    };


    return(
        
        <div class="container-fluid d-flex justify-content-center">
            <div className='form-AddOrder-bg d-flex justify-content-center'>
                <div className="row flex-fill d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center pt-5">
                        <form onSubmit={handleSubmit(onSubmit)} id="formulario" className='flex-fill row '>
                            <div className='col-6'>
                                <div>
                                <div class="mb-3" id="grupo-nombre">
                                    <label for="name" class="form-label" >Nombre de la empresa</label>
                                    <input type="text" className='form-control input-text' defaultValue={companyData.name||''}
                                    {...register("name",{
                                        required:true,
                                        pattern: companyData.companyPattern
                                    })}/>{errors.name && "Nombre de empresa requerido"}
                                    <p className="forms-input-error"> El nombre de la empresa solo acepta caracteres alfabeticos</p>
                                </div>
                            
                                <div class="mb-3">
                                    <label for="direction" class="form-label" name="direccion">Fecha</label>
                                    <input type="text" class="form-control input-text" defaultValue={companyData.address||''}
                                    {...register("direction",{
                                        required:true,
                                        pattern: companyData.directionPattern
                                    })}/>{errors.direction && "Direccion de central requerida"}
                                </div>
                                <div>
                                    <p className="forms-input-error">La direccion no debe ser mayor a 40 caracteres</p>
                                </div>

                                </div>
                            </div>
                            <div className='col-6'>
                                <div>
                                <div class="mb-3" id="grupo-nombre">
                                    <label for="name" class="form-label" >Detalle</label>
                                    <input type="text" className='form-control input-text' Value="Coca Cola"/>
                                </div>
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
                                            <button className="btn btn-form-editCompany" type="submit" onClick={()=>{
                                                {errors.name?.type === 'required' &&
                                                errors.direction?.type === 'required' &&
                                                errors.phone?.type === 'required' &&
                                                errors.representantName?.type === 'required' &&
                                                alert("Todos los campos son requeridos")}
                                            }}>
                                            Realizar Pedido
                                            </button>
                                    
                                        </div>
                            </div>
                        </form>
                    </div>
                </div>           
            </div>
        </div>

    );
}

export default AddOrderForm;