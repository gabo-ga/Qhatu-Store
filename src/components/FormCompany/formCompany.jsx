import React from 'react';
import './formCompany.css';
import { useForm } from 'react-hook-form';
import { registerCompany } from '../FirebaseConfig';

const FormCompany = () => {
    const { register,formState:{ errors }, handleSubmit }=useForm();
    const onSubmit= (data) => {
        registerCompany(data.name,data.direction,data.phone,data.representantName);
    };

    const patterns = {
        namePattern:/^(?=.{3,39}$)[A-Z][a-z]+(?: [A-Z][a-z]+)+$/g,
        companyPattern:/^(?=.*[a-zA-Z])([A-Z a-z\d]|[^ ]){3,39}$/i,
        phonePattern:/^[6-7][0-9]{8}$/i,
        directionPattern: /^(?=.*[a-zA-Z])(?!.*[!$%()=?¡¿'¨"´+[~^`{}*])(?!.*[\t\n])([A-Z a-z\d]|[^ ]){3,39}$/i
    }
    return(
        
        <div class="container-fluid d-flex justify-content-center">
            <div className='container1 d-flex justify-content-center'>
                <div className="row align-self-center flex-fill">
                    <div className="col-12 d-flex justify-content-center">
                        <form onSubmit={ handleSubmit(onSubmit)}>
                            <div class="mb-3 ">
                                <label for="name" class="form-label">Nombre de la empresa</label>
                                <input type="text" class=" form-control input-text" placeholder="Coca Cola"
                                {...register("name",{
                                    required:true,
                                    pattern: patterns.companyPattern
                                })}/>{/*errors.name && "Last name is required"*/}
                            </div>

                            <div class="mb-3">
                                <label for="direction" class="form-label">Direccion de la central</label>
                                <input type="text" class="form-control input-text" placeholder="Av Heroinas Nro 23"
                                {...register("direction",{
                                    required:true,
                                    pattern: patterns.directionPattern
                                })}/>{/*errors.direction && "Last name is required"*/}
                            </div>

                            <div class="mb-3">
                                <label for="phone" class="form-label">Telefono del representante</label>
                                <input type="number" class="form-control input-text" placeholder="76543211"
                                {...register("phone",{
                                    required:true,
                                    valueAsNumber: true,
                                    min:60000000,
                                    max:79999999,
                                    pattern: patterns.phonePattern
                                })}/>{/*errors.phone && "Last name is required"*/}
                            </div>

                            <div class="mb-3">
                                <label for="representantName" class="form-label">Nombre del representante</label>
                                <input type="text" class="form-control input-text" placeholder="Santiago Hernandez Garcia"
                                {...register("representantName",{
                                    required:true,
                                    pattern: patterns.namePattern
                                })}/>{/*errors.representantName && "Last name is required"*/}
                            </div>
                            <div className='col-12'>
                                <div className="boton">
                                    <button className="btn btn-primary btn-formCompany" type="submit" onClick={()=>{
                                        {errors.name?.type === 'required' &&
                                        errors.direction?.type === 'required' &&
                                        errors.phone?.type === 'required' &&
                                        errors.representantName?.type === 'required' &&
                                        alert("Todos los campos son requeridos")}
                                    }}>
                                    Añadir Empresa
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

export default FormCompany;