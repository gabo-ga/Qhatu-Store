import React from 'react';
import Form from '../../components/ProductForms/ProductForm';
import './AddProduct.css'


const AddProduct = () => {
    return(
        <div className="formCont">
            <div >
                <h1 className="titleQhatu text-center">Qhatu Store</h1>
            </div>
            <div className="align-middle">
                <Form></Form>
            </div>
        </div>
    )

}
export default AddProduct