import { Link } from 'react-router-dom';
import React from 'react';
import { useForm } from 'react-hook-form';
import supervisorProfile from '../../pages/supervisorProfile/supervisorProfile';
import { registerUser } from '../FirebaseConfig'
import { useNavigate } from "react-router-dom";
import './forms-supv.css'

const FormsSupv = () => {
    const { register, formState: { errors }, handleSubmit }= useForm();
    let navigate = useNavigate();
    const onSubmit = (data) => {
        if(data.password == data.confirmPassword){
            if(data.typeOfUser != null){
                registerUser(data.name, data.email,data.phone,data.password,data.typeOfUser)
                navigate("/supervisor", {replace: true});
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
        <div className='container2 d-flex justify-content-center'>
            <div className="row align-self-center">
                <form onSubmit={ handleSubmit(onSubmit)}>

                    <div class="mycontainer">
                        <div className="col-lg-6 col-12 firstCol">
                            <div className="mb-3 ">
                                <label for="name" class="form-label">Nombre/s Apellidos</label>
                                <input type="text" class=" form-control input-text myinput" 
                                    placeholder="Santiago Hernandez Garcia" {...register("name",{ 
                                        required:true,
                                        maxLength:40,
                                        minLength:3,
                                        pattern:patterns.namePattern
                                })}/>{errors.name?.type === 'required' && "Nombre completo es requerido"}
                                 <div className='errors'>{errors.name?.type === 'pattern' && 'El nombre y apellido deben empezar por mayúscula'}</div>
                                 <div className='errors'>{errors.name?.type === 'maxLength' && 'Tamaño Superado'}</div>
                            </div>

                            <div className="mb-3">
                              
                                <label for="email" class="form-label">Correo electronico</label>
                                <input type="text" class="form-control input-text" aria-describedby="emailHelp"
                                    placeholder="SantiagoHernandez@gmail.com" {...register("email",{ 
                                        required:true,
                                        maxLength:40,
                                        minLength:10,
                                        pattern:patterns.emailPattern
                                })}/>{errors.email?.type === 'required' && "Email es requerido"}
                                <div className='errors'>{errors.email?.type === 'pattern' && 'Formato de Correo Inválido'}</div>
                            </div>

                            <div className="mb-3">

                                <label for="phone" class="form-label">Celular</label>
                                <input type="number" class="form-control input-text" placeholder="76543211"

                                    {...register("phone",{ required:true,
                                        min:60000000,
                                        max:79999999,
                                        valueAsNumber:true,
                                        pattern:patterns.phonePattern
                                    })}/>{errors.phone?.type === 'required' && "Numero de celular es requerido"}
                                    <div className='errors'>{errors.phone?.type === 'pattern' && 'Número Invalido'}</div>
                                    <div className='errors'>{errors.phone?.type === 'min' && 'Tamaño de número Inválido'}</div>
                                    <div className='errors'>{errors.phone?.type === 'max' && 'Tamaño de número Inválido'}</div>
                            </div>

                            <div className="mb-3">
                                <label for="password" class="form-label">Contraseña</label>
                                <input type="password" class="form-control input-text myinput" placeholder="••••••••"
                                    {...register("password",{ required:true,
                                        maxLength:40,
                                        minLength:8,
                                        pattern:patterns.passwordPattern
                                })}/>{errors.password?.type === 'required' && "La contraseña es requerida"}
                                <div className='errors'>{errors.password?.type === 'pattern' && 'La contraseña debe contener almenos una mayuscula y un numero'}</div>
                                <div className='errors'>{errors.password?.type === 'minLength' && 'La contraseña debe contener mínimo 8 carácteres'}</div>
                                <div className='errors'>{errors.password?.type === 'manLength' && 'La contraseña debe contener máximo 39 carácteres'}</div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 secondCol">
                            <div className='row'>

                                <div className='col-12 order-2 order-lg-1'>
                                    <div className= "mb-3 checks ">
                                        <label className="user form-label">
                                            Tipo de usuario
                                        </label>
                                        <br />
                                        <div className='row'>
                                            <div className='col-lg-12 col-6'>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="radio" value="Vendedor" 
                                                        {...register("typeOfUser")} checked
                                                    />
                                                    <label className="form-check-label" for="flexRadioDefault1">
                                                        Vendedor
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-lg-12 col-6'>
                                                <div className="form-check mb-3 secondCheck">
                                                    <input className="form-check-input" type="radio" value="Supervisor"
                                                        {...register("supervisor")} disabled
                                                    />
                                                    <label className="form-check-label" for="supervisor">
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
                                            <input type="password" class="form-control input-text myinput" placeholder="••••••••"
                                                {...register("confirmPassword",{ 
                                                    required:true,
                                                    maxLength:40,
                                                    minLength:8,
                                                    pattern:patterns.passwordPattern
                                                })}/> {/*errors.confirmPassword && "Password is required"*/}
                                        </div>
                                    </div>
                                </div>
                                <br/>
                            </div>

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
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
}

export default FormsSupv