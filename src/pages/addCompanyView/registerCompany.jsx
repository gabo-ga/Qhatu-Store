import React from 'react';
import FormCompany from '../../components/FormCompany/formCompany';


const RegisterCompany = ({cargo}) => {
    return(
        <div className="formCont">
            <div >
                <h1 className="titleQhatu text-center">Qhatu Store</h1>
            </div>
            <div className=" align-middle  addproduct-form-container">
                <FormCompany cargo={cargo}></FormCompany>
            </div>
        </div>
    )

}
export default RegisterCompany;