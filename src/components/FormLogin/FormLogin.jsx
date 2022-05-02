import React from 'react';
import './FormLogin.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { onGetUsers} from '../FirebaseConfig';
import { useEffect, useState} from 'react';
const FormLogin = () => {
    const { register,formState:{ errors }, handleSubmit }=useForm();
    let navigate = useNavigate();
    const [userData,setUserData]= useState([]);
    let encontrado=false;
    const onSubmit= (doc) =>{
        userData?.map(({id,data}) =>{ 
            if(doc.email==data.email && doc.password== data.password){
                encontrado=true;
                if(data.typeOfUser=='Supervisor'){
                    navigate('/supervisor', {state:{name:data.name}});
                }else if(data.typeOfUser=='Administrador'){
                    navigate('/administrador', {state:{name:data.name}});
                }else if(data.typeOfUser=='Vendedor'){
                    navigate('/vendedor', {state:{name:data.name}});
                }
            }
        })
        if(!encontrado){
            alert("Email y/o contraseña incorrecto perro");
        }
    };
    useEffect(()=>{
        onGetUsers((querySnapshot) => {
            setUserData(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        });
    },[]);

    
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className='container1 d-flex justify-content-center align-self-center'>
                <form onSubmit={ handleSubmit(onSubmit)} className="d-flex justify-content-center align-self-center">
                    <div className="row d-flex align-self-center justify-content-center">
                        <div className='imagen'>
                            <img className='rounded-circle' src = 'https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/QhatuStore.png?alt=media&token=2d307084-73ed-48f3-82c1-768f84f25447'/>
                        </div>
                        <div className='tittle'>
                            <h2 >Qhatu Store </h2>
                        </div>
                        <div className="mb-3">
                            <label for="email" class="form-label">Correo electrónico</label>
                                <input type="text" class="form-control input-text" aria-describedby="emailHelp"
                                    placeholder="SantiagoHernandez@gmail.com" 
                                    {...register("email",{ 
                                        required:true
                                    })}/>{errors.email?.type === 'required' && "Email es requerido"}
                        </div>

                        <div className="mb-3">
                            <label for="password" class="form-label">Contraseña</label>
                                <input type="password" class="form-control input-text" placeholder="••••••••"
                                    {...register("password",{ 
                                        required:true
                                    })}/>{errors.password?.type === 'required' && "La contraseña es requerida"}
                        </div>

                        <div className='col-12'>
                            <div className="boton">
                                <button className="btn btn-primary btn-form-admin" type="submit" onClick={()=>{
                                    {errors.email?.type === 'required' &&
                                    errors.password?.type === 'required' &&
                                    alert("Todos los campos son requeridos")}
                                    }}>
                                    Iniciar Sesión
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;