import React from 'react';
import FormCompany from '../../components/FormCompany/formCompany';
import './registerCompany.css'

const RegisterCompany = () => {
    return(
        <div className="formCont">
            <div >
                <h1 className="titleQhatu text-center">Qhatu Store</h1>
            </div>
            <div className=" align-middle">
                <FormCompany></FormCompany>
            </div>
        </div>
    )

}
export default RegisterCompany;