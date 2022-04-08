import React from 'react';
import './forms.css'

const forms = () => {
    return(
        
        <div class="container1 align-middle">
            <form>
                <div class="row">
                    <div class="col">
                    
                            <div class="mb-3">
                                <label for="inputName" class="form-label">Nombre/s Apellidos</label>
                                <input type="text" class="form-control" id="inputName"/>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>

                            <div class="mb-3">
                                <label for="inputPhone" class="form-label">Celular</label>
                                <input type="text" class="form-control" id="inputPhone"/>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            
                    </div>
                    <div class="col col2 ">
                        <div class="align-bottom">
                                <div class= "mb-3 checks">
                                    <label class="user form-label">
                                        Tipo de usuario
                                    </label>
                                    <br />
                                    <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Vendedor
                                    </label>
                                    </div>
                                    <div class="form-check mb-3 secondCheck">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Supervisor
                                    </label>    
                                    </div>
                                </div> 
                                <br/>
                                <div class="mb-3 confirm align-bottom">
                                    <label for="exampleInputPassword1" class="form-label">Confirmacion de contraseña</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                                </div>
                        </div>
                    </div>

                </div>

                <div class="boton">
                    <button class="btn btn-primary" type="submit">Crear cuenta</button>
                </div>
            </form>
        </div>

    );
}

export default forms