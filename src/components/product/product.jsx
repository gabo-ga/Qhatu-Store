import React from "react";

import './product.css'

const product = (props) => {
    return(
        <div className="col-4 col-sm-6 product-item">
            <div className="product-image">
                <img src={props.src} />
            </div>
            <p>{props.nombreProducto}</p>
            <p>{props.precio}</p>
        </div>
    )
}

export default product