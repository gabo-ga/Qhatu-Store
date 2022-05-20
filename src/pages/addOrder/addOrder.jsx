import React from 'react';
import AddOrderForm from '../../components/addOrderForm/AddOrderForm';
import "./addOrder.css"

import { useProduct, ProductsProvider } from '../../components/context/products';

const AddOrder = () => {

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

export default () => <ProductsProvider>
  <AddOrder></AddOrder>
</ProductsProvider> 