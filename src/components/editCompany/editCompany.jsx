import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

import { useForm } from 'react-hook-form';
import { onGetUsers, onGetCompany } from '../FirebaseConfig';
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

const validarForm = (e) => {
    switch(e.target.name){
        case "nombre":
            validarCampo(patterns.namePattern, e.target, 'name');
        break;
        case "direccion":
            validarCampo();
        break;
        case "telefono":
            validarCampo();
        break;
        case "representante":
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.querySelector('.forms-input-error').classList.remove('.forms-input-error-active');
    }else{
        document.querySelector('#grupo-nombre .forms-input-error').classList.add('forms-input-error-active');
    }
}

const EditCompany = (props) => {
    const [companyData,setCompanyData]= useState([]);
    useEffect(()=>{
        setCompanyData(
        onGetCompany(props.id)
        );
        //const data = onGetCompany(props.id);
        console.log(companyData)
      },[]);

    const { register,formState:{ errors }, handleSubmit }=useForm();
    let navigate = useNavigate();
    var empData = {id:props.id, name: props.name, address: props.address, 
        representativePhone: props.representativePhone, representativeName: props.representativePhone};
  

    return(
        
        <div class="container-fluid d-flex justify-content-center">
            <div className='container1 d-flex justify-content-center'>
                <div className="row flex-fill d-flex justify-content-center">
                    <div className='col-12 edit-company-tittle text-center'>
                        Modificar Datos
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <form id="formulario" className='flex-fill row '>
                            <div className='col-12 d-flex justify-content-center'>
                                <div>
                                <div class="mb-3" id="grupo-nombre">
                                    <label for="name" class="form-label" >Nombre de la empresa</label>
                                    <input type="text" className='form-control input-text' placeholder="Coca Cola" value={empData.name}
                                    {...register("name",{
                                        required:true,
                                        pattern: patterns.companyPattern
                                    })}/>{errors.name && "Nombre de empresa requerido"}
                                    <p className="forms-input-error"> El nombre de la empresa solo acepta caracteres alfabeticos</p>
                                </div>
                            
                                <div class="mb-3">
                                    <label for="direction" class="form-label" name="direccion">Dirección de la central</label>
                                    <input type="text" class="form-control input-text" placeholder="Av Heroinas Nro 23" value={empData.address}
                                    {...register("direction",{
                                        required:true,
                                        pattern: patterns.directionPattern
                                    })}/>{errors.direction && "Direccion de central requerida"}
                                </div>
                                <div>
                                    <p className="forms-input-error">La direccion no debe ser mayor a 40 caracteres</p>
                                </div>

                                <div class="mb-3">
                                    <label for="phone" class="form-label" name="telefono">Teléfono del representante</label>
                                    <input type="number" class="form-control input-text" placeholder="76543211" min="60000000" max="79999999" value={empData.representativePhone}
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
                                    <input type="text" class="form-control input-text" placeholder="Santiago Hernandez Garcia" value={empData.representativeName}
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
                            <div className='col-6'>
                            <div className="boton">
                                            <button className="btn btn-primary btn-formCompany" type="submit" onClick={()=>{
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
                            <div className='col-6'>
                            <div className="boton">
                                            <button className="btn btn-primary btn-formCompany" onClick={() => navigate(-1)}>
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