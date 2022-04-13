import React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../FirebaseConfig'
import './forms.css'

const Forms = () => {
    const { register, formState: { errors }, handleSubmit }= useForm();
    const onSubmit = (data) => {
        registerUser(data.name, data.email,data.phone,data.password,data.typeOfUser)
    };
    
    
    const patterns = {
        namePattern:/^[a-z ]+$/i,
        emailPattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/i,
        phonePattern:/^[0-9]+$/i,
        passwordPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[!"#$%&/()=?¡¿'"´}+´[~^`{}*])(?!.*[\t\n])([A-Za-z\d]|[^ ]){8,40}$/i
    }

    return(
        
        <div className="container-fluid d-flex justify-content-center">
            <div className='container1 d-flex justify-content-center'>
                <div className="row align-self-center">
                    <form onSubmit={ handleSubmit(onSubmit)}>
                        <div className="col-lg-6 col-12 ">
                            <div className="mb-3 ">
                                <label for="name" class="form-label">Nombre/s Apellidos</label>
                                <input type="text" class=" form-control input-text" 
                                    placeholder="Santiago Hernandez Garcia" {...register("name",{ 
                                        required:true,
                                        maxLength:40,
                                        minLength:3,
                                        pattern:patterns.namePattern
                                })}/>{/*errors.name && "Last name is required"*/}
                            </div>

                            <div className="mb-3">
                                <label for="email" class="form-label">Correo electronico</label>
                                <input type="email" class="form-control input-text" aria-describedby="emailHelp"
                                    placeholder="SantiagoHernandez@gmail.com" {...register("email",{ 
                                        required:true,
                                        maxLength:40,
                                        minLength:10,
                                        pattern:patterns.emailPattern
                                })}/>{/*errors.email && "Last name is required"*/}
                            </div>

                            <div className="mb-3">
                                <label for="phone" class="form-label">Celular</label>
                                <input type="text" class="form-control input-text" placeholder="76543211"
                                    {...register("phone",{ required:true,
                                        maxLength:8,
                                        minLength:8,
                                        valueAsNumber:true,
                                        pattern:patterns.phonePattern
                                    })}/>{/*errors.phone && "Last name is required"*/}
                            </div>

                            <div className="mb-3">
                                <label for="password" class="form-label">Contraseña</label>
                                <input type="password" class="form-control input-text" placeholder="••••••••"
                                    {...register("password",{ required:true,
                                        maxLength:40,
                                        minLength:8,
                                        pattern:patterns.passwordPattern
                                })}/>{/*errors.password && "Last name is required"*/}
                            </div>
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
                                                    <input className="form-check-input" type="radio" value="Vendedor"
                                                        {...register("typeOfUser")}
                                                    />
                                                    <label className="form-check-label" for="flexRadioDefault1">
                                                        Vendedor
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-6'>
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
                                        <label for="confirmPassword" class="form-label">Confirmacion de contraseña</label>
                                        <input type="password" class="form-control input-text" placeholder="••••••••"
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
                        <div className='col-12'>
                            <div className="boton">
                                <button className="btn btn-primary btn-form-admin" type="submit">
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

export default Forms