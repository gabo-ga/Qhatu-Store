import React from 'react';
import Forms from '../../components/Forms/Forms';
import './regUserAdm.css'


const regUserAdm = () => {
    return(
        <div className="formCont align-middle">
            <div >
                <h1 className="titleQhatu text-center">Qhatu Store</h1>
            </div>
            <div className=" align-middle">
                <Forms></Forms>
            </div>
        </div>
    )

}
export default regUserAdm