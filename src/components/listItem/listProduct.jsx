import React, { useEffect, useState } from 'react';
import ProductItemList from './productItemList';

import { onGetProducts } from '../../components/FirebaseConfig';
import { useProduct } from '../context/products';
import './listItem.css'
import './listCompany.css'

import "../modal/companyModal.css"
import "./empItemList.css"
const ListProducto = () => {

  let tableNumber=0;
  const {productsData} = useProduct();

    const ColorSelect = (props) => {
      if (props%2 > 0){
        tableNumber += 1
        return true
      }else{
        tableNumber += 1
        return false
      }
    }

  return (
    <div className="container-fluid p-0">
      {productsData?.map(({id,data,cant}) =>( 
        <div key={id} className={ ColorSelect(tableNumber) ?"emp-item-list-1 row p-0" : "emp-item-list-2 row p-0"}>
            <ProductItemList name={data.name} price={data.price} cant={cant}></ProductItemList>
        </div>
      ))}
    </div>
  )
}

export default ListProducto