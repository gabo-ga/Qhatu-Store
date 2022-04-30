import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import {onGetCompany, editCompany} from '../FirebaseConfig';
import { useNavigate } from "react-router-dom";

import './editCompany.css'

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

const EditCompany = (props) => {
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
        console.log(companyData.id);
        editCompany(companyData.id, data)
        console.log(data.name, data.direction);
        navigate(-1)
    };
    return(
        
        <div class="container-fluid d-flex justify-content-center">
            <div className='container1 d-flex justify-content-center'>
                <div className="row flex-fill d-flex justify-content-center">
                    <div className='col-12 edit-company-tittle text-center'>
                        Modificar Datos
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <form onSubmit={handleSubmit(onSubmit)} id="formulario" className='flex-fill row '>
                            <div className='col-12 d-flex justify-content-center'>
                                <div>
                                <div class="mb-3" id="grupo-nombre">
                                    <label for="name" class="form-label" >Nombre de la empresa</label>
                                    <input type="text" className='form-control input-text' placeholder={companyData.name}
                                    {...register("name",{
                                        required:true,
                                        pattern: companyData.companyPattern
                                    })}/>{errors.name && "Nombre de empresa requerido"}
                                    <p className="forms-input-error"> El nombre de la empresa solo acepta caracteres alfabeticos</p>
                                </div>
                            
                                <div class="mb-3">
                                    <label for="direction" class="form-label" name="direccion">Dirección de la central</label>
                                    <input type="text" class="form-control input-text" placeholder={companyData.address}
                                    {...register("direction",{
                                        required:true,
                                        pattern: companyData.directionPattern
                                    })}/>{errors.direction && "Direccion de central requerida"}
                                </div>
                                <div>
                                    <p className="forms-input-error">La direccion no debe ser mayor a 40 caracteres</p>
                                </div>

                                <div class="mb-3">
                                    <label for="phone" class="form-label" name="telefono">Teléfono del representante</label>
                                    <input type="number" class="form-control input-text" placeholder={companyData.representativePhone} min="60000000" max="79999999"
                                    {...register("phone",{
                                        required:true,
                                        valueAsNumber: true,
                                        min:60000000,
                                        max:79999999,
                                        pattern: patterns.phonePattern
                                    })}/>{errors.phone && "Telefono del representante requerido"}
                                </div>
                                <div>
                                    <p className="forms-input-error">El numero no debe tener caracteres alfabeticos</p>
                                </div>

                                <div class="mb-3">
                                    <label for="representantName" class="form-label" name="representante">Nombre del representante</label>
                                    <input type="text" class="form-control input-text" placeholder={companyData.representativeName}
                                    {...register("representantName",{
                                        required:true,
                                        pattern: patterns.namePattern
                                    })}/>{errors.representantName && "Nombre del representante requerido"}
                                </div>
                                    <div>
                                        <p className="forms-input-error">el nombre no debe tener valores numericos</p>
                                    </div>

                                </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                            <div className="boton">
                                            <button className="btn btn-form-editCompany" type="submit" onClick={()=>{
                                                {errors.name?.type === 'required' &&
                                                errors.direction?.type === 'required' &&
                                                errors.phone?.type === 'required' &&
                                                errors.representantName?.type === 'required' &&
                                                alert("Todos los campos son requeridos")}
                                            }}>
                                            Guardar Cambios
                                            </button>
                                    
                                        </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                            <div className="boton">
                                            <button className="btn btn-form-editCompany" onClick={() => navigate(-1)}>
                                            Cancelar
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

export default EditCompany