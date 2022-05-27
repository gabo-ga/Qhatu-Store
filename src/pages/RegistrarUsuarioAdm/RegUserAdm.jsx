import React from 'react';
import Forms from '../../components/Forms/Forms';
import './RegUserAdm.css'


const regUserAdm = () => {
    return(
        <div className="formCont">
            <div >
                <h1 className="titleQhatu text-center">Qhatu Store</h1>
            </div>
            <div className="align-middle  addproduct-form-container">
                <Forms></Forms>
            </div>
        </div>
    )

}
export default regUserAdm