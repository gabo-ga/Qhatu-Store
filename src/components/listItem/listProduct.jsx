import React, { useEffect, useState } from 'react';
import ProductItemList from './productItemList';

import { onGetProducts } from '../../components/FirebaseConfig';

import { Link } from 'react-router-dom';
import './listItem.css'
import './listCompany.css'

import "../modal/companyModal.css"
import "./empItemList.css"
const ListProducto = () => {

  const [productsData,setProductsData]= useState([]);
  let tableNumber=0;

  useEffect(()=>{
      onGetProducts((querySnapshot) => {
          setProductsData(querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })))
      });
    },[]);

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
      {productsData?.map((id) =>( 
        <div className={ ColorSelect(tableNumber) ?"emp-item-list-1 row p-0" : "emp-item-list-2 row p-0"}>
            <ProductItemList id={id}></ProductItemList>
        </div>
      ))}
    </div>
  )
}

export default ListProducto