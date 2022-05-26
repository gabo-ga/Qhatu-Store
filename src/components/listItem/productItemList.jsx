import React, { useEffect } from 'react';

const ProductItemList = (props) => {
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

useEffect(()=>{
},[]);

  return (
    <div className="container-fluid p-0 ">
        <div className={ ColorSelect(props) ?"emp-item-list-1 row p-0" : "emp-item-list-2 row p-0"}>
            <div className="col-6 col-lg-6 d-flex align-items-center">
                <p className='m-0 item-name'>Nombre del producto: {props.name}</p>
            </div>
            <div className="col-lg-6 col-6 d-flex align-items-center">
                <p className='m-0 item-name'>Precio por unidad:{props.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductItemList