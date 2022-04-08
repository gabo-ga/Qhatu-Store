import React from 'react';
import { useForm } from 'react-hook-form';
import './forms.css'

const forms = (props) => {
    const { register, handleSubmit }= useForm();
    const onSubmit = data => console.log(data);

    return(
        
        <div class="container-fluid d-flex justify-content-center">
            <div className='container1 d-flex justify-content-center'>
                <div className="row align-self-center">
                    <div className="col-lg-6 col-12 ">
                        <form onSubmit={ handleSubmit(onSubmit)}>
                            <div class="mb-3 ">
                                <label for="inputName" class="form-label">Nombre/s Apellidos</label>
                                <input type="text" class=" form-control input-text" {...register("name",{ 
                                    required:true, maxLength:40 , minLength:3 , pattern:/^[A-Za-z]+$/i })}/>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
                                <input type="email" class="form-control input-text" aria-describedby="emailHelp"
                                    {...register("email",{ required:true, maxLength:40, 
                                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/})}/>
                            </div>

                            <div class="mb-3">
                                <label for="inputPhone" class="form-label">Celular</label>
                                <input type="text" class="form-control input-text" {...register("phone",{ 
                                    required:true, maxLength:8, minLength:8, pattern: /^[0-9]+$/ })}/>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                <input type="password" class="form-control input-text" id="exampleInputPassword1"/>
                            </div>
                            </form>
                    </div>
                    <div className="col-lg-6 col-12 ">
                        <div className='row'>
                            <div className='col-12 order-2 order-lg-1'>
                                <div className= "mb-3 checks ">
                                <label className="user form-label">
                                    Tipo de usuario
                                </label>
                                <br />
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Vendedor
                                        </label>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="form-check mb-3 secondCheck">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
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
                                    <label for="exampleInputPassword1" class="form-label">Confirmacion de contraseña</label>
                                    <input type="password" class="form-control input-text" id="exampleInputPassword1"/>
                                </div>
                            </div>

                        </div>
                        
                        <br/>
                    </div>
                    <div className='col-12'>
                        <div className="boton">
                        <button className="btn btn-primary" type="submit">Crear cuenta</button>
                        </div>
                    </div>
                </div>
                
            </div>
                
        </div>

    );
}

export default forms