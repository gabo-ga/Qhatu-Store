import React from "react";

import './product.css'

const product = () => {
    return(
        <div className="col-4 col-sm-6 product-item">
            <div className="product-image">
                <img src="http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c0de.png" />
            </div>
            <p>Cocacola 125ml</p>
            <p>2 Bs</p>
        </div>
    )
}

export default product