import React from 'react';
import './formCompany.css';

const FormCompany = () => {

    return(
        
        <div class="container-fluid d-flex justify-content-center">
            <div className='container1 d-flex justify-content-center'>
                <div className="row align-self-center flex-fill">
                    <div className="col-12 d-flex justify-content-center">
                        <form>
                            <div class="mb-3 ">
                                <label for="inputName" class="form-label">Nombre de la empresa</label>
                                <input type="text" class=" form-control input-text" id="inputNameCompany"
                                placeholder="Coca Cola"/>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Direccion de la central</label>
                                <input type="text" class="form-control input-text" id="inputDirection"
                                placeholder="Av Heroinas Nro 23"/>
                            </div>

                            <div class="mb-3">
                                <label for="inputPhone" class="form-label">Telefono del representante</label>
                                <input type="text" class="form-control input-text" id="inputPhone"
                                placeholder="76543211"/>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Nombre del representante</label>
                                <input type="text" class="form-control input-text" id="inputName"
                                placeholder="Santiago Hernandez Garcia"/>
                            </div>
                        </form>
                    </div>
                    <div className='col-12'>
                        <div className="boton">
                        <button className="btn btn-primary" type="submit">Añadir Empresa</button>
                        </div>
                    </div>
                </div>
                
            </div>
                
        </div>

    );
}

export default FormCompany;