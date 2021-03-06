import React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../FirebaseConfig'
import { useNavigate } from "react-router-dom";
import './forms.css'

const Forms = () => {
    const { register, formState: { errors }, handleSubmit }= useForm();
    let navigate = useNavigate();
    const onSubmit = (data) => {
        if(data.password == data.confirmPassword){
            if(data.typeOfUser != null){
                registerUser(data.name, data.email,data.phone,data.password,data.typeOfUser)
                navigate("/administrator", {replace: true});
            }else{
                alert("Todos los campos deben ser llenados");
            }
        }else{
            alert("Las contraseñas deben ser iguales");
        }
    };
    
    
    
    const patterns = {
        namePattern:/^(?=.{3,39}$)[A-Z][a-z]+(?: [A-Z][a-z]+)+$/g,
        emailPattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/i,
        phonePattern:/^[6-7][0-9]{8}$/i,
        passwordPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[!"#$%&/()=?¡¿'"´}+´[~^`{}*])(?!.*[\t\n])([A-Za-z\d]|[^ ]){8,39}$/i
    }

    return(
        
        <div className="container-fluid d-flex justify-content-center">
            <div className='container1-formuser d-flex justify-content-center'>
            <form onSubmit={ handleSubmit(onSubmit)} className='d-flex align-self-center'>
                <div className="row d-flex align-self-center justify-content-center">
                        <div className="col-lg-6 col-12 ">
                            <div className="mb-3 ">
                                <label for="name" class="form-label">Nombre/s Apellidos</label>
                                <input type="text" class=" form-control input-text" 
                                    placeholder="Santiago Hernandez Garcia" {...register("name",{ 
                                        required:true,
                                        maxLength:40,
                                        minLength:3,
                                        pattern:patterns.namePattern
                                })}/>{errors.name?.type === 'required' && "Nombre completo es requerido"}
                            </div>

                            <div className="mb-3">
                                <label for="email" class="form-label">Correo electrónico</label>
                                <input type="text" class="form-control input-text" aria-describedby="emailHelp"
                                    placeholder="SantiagoHernandez@gmail.com" {...register("email",{ 
                                        required:true,
                                        maxLength:40,
                                        minLength:10,
                                        pattern:patterns.emailPattern
                                })}/>{errors.email?.type === 'required' && "Email es requerido"}
                            </div>

                            <div className="mb-3">
                                <label for="phone" class="form-label">Número de Celular</label>
                                <input type="number" class="form-control input-text" placeholder="76543211" min="60000000" max="79999999"
                                    {...register("phone",{ required:true,
                                        min:60000000,
                                        max:79999999,
                                        valueAsNumber:true,
                                        pattern:patterns.phonePattern
                                    })}/>{errors.phone?.type === 'required' && "Numero de celular es requerido"}
                            </div>

                            <div className="mb-3">
                                <label for="password" class="form-label">Contraseña</label>
                                <input type="password" class="form-control input-text" placeholder="••••••••"
                                    {...register("password",{ required:true,
                                        maxLength:40,
                                        minLength:8,
                                        pattern:patterns.passwordPattern
                                })}/>{errors.password?.type === 'required' && "La contraseña es requerida"}
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 d-flex align-items-end ">
                            <div className='row'>
                                <div className='col-12 order-2 order-lg-1 '>
                                    <div className= "mb-3 checks ">
                                        <label className="user form-label">
                                            Tipo de usuario
                                        </label>
                                        <br />
                                        <div className='row'>
                                            <div className='col-lg-12 col-6'>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="radio" value="Vendedor"
                                                        {...register("typeOfUser")}
                                                    />
                                                    <label className="form-check-label" for="flexRadioDefault1">
                                                        Vendedor
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-lg-12 col-6'>
                                                <div className="form-check mb-3 secondCheck">
                                                    <input className="form-check-input" type="radio" value="Supervisor"
                                                        {...register("typeOfUser")}
                                                    />
                                                    <label className="form-check-label" for="flexRadioDefault2" >
                                                        Supervisor
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 order-1 order-lg-2'>
                                    <div className="mb-3 confirm ">
                                        <label for="confirmPassword" class="form-label">Confirmación de contraseña</label>
                                        <input type="password" class="form-control input-text" placeholder="••••••••"
                                            {...register("confirmPassword",{ 
                                                required:true,
                                                maxLength:40,
                                                minLength:8,
                                                pattern:patterns.passwordPattern
                                            })}/> {errors.confirmPassword?.type === 'required' && "Confirme su contraseña"}
                                    </div>
                                </div>
                            </div>
                            <br/>
                        </div>
                        <div className='col-12'>
                            <div className="boton">
                                <button className="btn btn-primary btn-form-admin" type="submit" onClick={()=>{
                                    {errors.name?.type === 'required' &&
                                     errors.email?.type === 'required' &&
                                     errors.phone?.type === 'required' &&
                                     errors.password?.type === 'required' &&
                                     alert("Todos los campos son requeridos")}
                                }}>
                                    Crear cuenta
                                </button>
                                <a href="/administrator/adminuser">
                                        <button className="btn-cancel" type="button">
                                        Cancelar
                                        </button>
                                    </a>
                            </div>
                        </div>
                </div>
                
                </form>
            </div>
        </div>

    );
}

export default Forms