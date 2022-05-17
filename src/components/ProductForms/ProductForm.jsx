import React, { useEffect, useState } from 'react';
import './ProductForm.css';
import { useForm } from 'react-hook-form';
import { registerProduct } from '../FirebaseConfig';
import { onGetCompanies } from '../FirebaseConfig';


const inputs = document.querySelectorAll('#formulario input');

const patterns = {
    namePattern:/^(?=.{3,39}$)[A-Z][a-z]+(?: [A-Z][a-z]+)+$/g,
    productPattern:/^(?=.*[a-zA-Z])([A-Z a-z\d]|[^ ]){3,39}$/i,
    pricePattern:/^[1-9][0-9]{3}$/i,
    descriptionPattern: /^(?=.*[a-zA-Z])(?!.*[!$%()=?¡¿'¨"´+[~^`{}*])(?!.*[\t\n])([A-Z a-z\d]|[^ ]){3,39}$/i
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
        case "descripcion":
            validarCampo();
        break;
        case "precio":
            validarCampo();
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

const ProductForm = () => {
    const { register,formState:{ errors }, handleSubmit }=useForm();
    const onSubmit= (data) => {
        var combo = document.getElementById("empresa");
        var selected = combo.options[combo.selectedIndex].text;
        registerProduct(data.name,data.description,data.price,selected);
    };

    const [companyData,setCompanyData]= useState([]);
    let tableNumber=0;

    useEffect(()=>{
        onGetCompanies((querySnapshot) => {
          setCompanyData(querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })))
        });
      },[]);


    return(
        
        <div class="container-fluid d-flex justify-content-center">
            <div className='container1 d-flex justify-content-center'>
                <div className="row align-self-center flex-fill">
                    <div className="col-12 d-flex justify-content-center">
                        <form onSubmit={handleSubmit(onSubmit)} id="formulario">
                            <div class="mb-3" id="grupo-nombre">
                                <label for="name" class="form-label" >Nombre del producto</label>
                                <input type="text" className='form-control input-text' placeholder="Coca-Cola 3Lts."
                                {...register("name",{
                                    required:true,
                                    pattern: patterns.productPattern
                                })}/>
                                <div className='errors'>{errors.name?.type === 'pattern' && 'Nombre del Producto requerido'}</div>
                                <p className="forms-input-error"> El nombre de la empresa solo acepta caracteres alfabeticos</p>
                            </div>
                        

                            <div class="mb-3">
                                <label for="description" class="form-label" name="descripcion">Descripcion</label>
                                <input type="text" class="form-control input-text" placeholder="Bebida no retornable de 3 litros"
                                {...register("description",{
                                    required:true,
                                    pattern: patterns.descriptionPattern
                                })}/>{errors.direction && "Descripcion requerida"}
                                <div className='errors'>{errors.description?.type === 'pattern' && 'Descripcion requerida'}</div>
                                
                            </div>
                            <div>
                                <p className="forms-input-error">La descripcion no debe ser mayor a 40 caracteres</p>
                            </div>

                            <div class="mb-3 price row" precio unitario>
                                <label for="price" class="form-label col priceLabel" name="precio">Precio unitario</label>
                                <input type="number" class="form-control input-text col-md-auto col" placeholder="12" min="1" max="999"
                                {...register("price",{
                                    required:true,
                                    valueAsNumber: true,
                                    min:1,
                                    max:999,
                                    pattern: patterns.pricePattern
                                })}/>{errors.phone && ""}
                                <div className='errors'>{errors.price?.type === 'pattern' && ''}</div>

                                <label class= "bs col col-lg-2" >Bs.</label>
                                
                            </div>
                            <div>
                                <p className="forms-input-error">El precio no debe tener caracteres alfabeticos</p>
                            </div>

                            <div class="mb-3 row marca" >
                                <label for="company" class="form-label col marcaLabel" name="company">Marca</label>
                                <select id="empresa" name="empresa" class="form-select col" aria-label="Default select example">
                                    <option selected>Seleccione una marca</option>
                                    {companyData?.map(({data}) =>(
                                        <option> {data.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div class="mb-3 row imagen">
                                <label for="imagen" class="form-label col" name="imagen">Foto</label>
                                <div class="file-select col">
                                <input type="file" name= "imagen" id="imageInput" class="" accept="image/png" />
                                </div>
                            </div>

                            <div className='col-12'>
                                <div className="boton">
                                    <button className="btn btn-primary btn-formCompany" type="submit" onClick={()=>{
                                        {errors.name?.type === 'required' &&
                                        errors.description?.type === 'required' &&
                                        errors.price?.type === 'required' &&
                                        errors.company?.type === 'required' &&
                                        alert("Todos los campos son requeridos")}
                                    }}>
                                    Añadir Producto
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

export default ProductForm;