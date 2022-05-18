import React, { useEffect, useState } from 'react';
import { onGetProduct } from '../FirebaseConfig';



const ProductItemList = (props) => {
const [productData,setProductData]= useState([]);
let tableNumber=0;

const ColorSelect = (props) => {
  if (props%2 > 0){
    tableNumber += 1
    return true
  }else{
    tableNumber += 1
    return false
  }
}

const getProductById = async (id) => {
  try {
    const doc = await onGetProduct(id);
    setProductData({ ...doc.data() });
  } catch (error) {
    console.error(error);
  }
};

useEffect(()=>{
  getProductById(props.id);
},[]);

  return (
    <div className="container-fluid p-0 ">
        <div className={ ColorSelect(props) ?"emp-item-list-1 row p-0" : "emp-item-list-2 row p-0"}>
            <div className="col-4 col-lg-4 d-flex align-items-center">
                <p className='m-0 item-name'>Producto: {productData.name}</p>
            </div>
            <div className="col-lg-4 col-4 d-flex align-items-center">
                <p className='m-0 item-name'>C/U:{productData.price}</p>
            </div>
            <div className="col-lg-4 col-2 d-flex align-items-center">
                <p className='m-0 item-name'>Cant: 0</p>
            </div>
        </div>
    </div>
  )
}

export default ProductItemList