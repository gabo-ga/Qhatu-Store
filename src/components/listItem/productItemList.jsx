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
            <div className="col-5 col-lg-5 d-flex align-items-center">
                <p className='m-0 item-name'>Producto: {props.name}</p>
            </div>
            <div className="col-lg-5 col-5 d-flex align-items-center">
                <p className='m-0 item-name'>C/U:{props.price}</p>
            </div>
            <div className="col-lg-2 col-2 d-flex align-items-center">
              <input type="text" className='form-control text-center' defaultValue={props.cant}/>
            </div>
        </div>
    </div>
  )
}

export default ProductItemList