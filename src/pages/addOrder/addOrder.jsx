import React from 'react';
import FormCompany from '../../components/FormCompany/formCompany';
import AddOrderForm from '../../components/addOrderForm/AddOrderForm';
import "./addOrder.css"


const addOrder = () => {


  return (
    <div className="form-addOrder-pg">
            <div >
                <h1 className="titleQhatu text-center">Qhatu Store</h1>
            </div>
            <div>
                <AddOrderForm cargo="supervisor"></AddOrderForm>
            </div>
        </div>
  )
}

export default addOrder