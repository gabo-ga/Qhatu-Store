import React from 'react';
import AddOrderForm from '../../components/addOrderForm/AddOrderForm';
import "./addOrder.css"

import {ProductsProvider } from '../../components/context/products';

const AddOrder = () => {

  return (
    <div className="form-addOrder-pg">
            <div >
                <h1 className="titleQhatu text-center">Qhatu Store</h1>
            </div>
            <div>
              <AddOrderForm></AddOrderForm>
            </div>
        </div>
  )
}

export default AddOrder