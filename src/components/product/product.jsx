import React from "react";
import { deleteProduct } from "../FirebaseConfig";

import './product.css'

const Product = (props) => {
    let id = props.id
    const handleClick= (id) =>{
        deleteProduct(id);
    }

    return(
        <div className="col-lg-4 col-6  d-flex justify-content-center product-container">
            <div className="product-item">
                <div className="product-image">
                    <img src={props.src} alt="imagen del producto"/>
                </div>
                <p>{props.nombreProducto}</p>
                <p>{props.precio}</p>
                <button type="button" class="btn btn-add-product" onClick={() => handleClick(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default Product