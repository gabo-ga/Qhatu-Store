import React from "react";
import PerfilCard from "../../components/perfilCard/perfilCard";
import Footer from "../../components/fotter/footer";
import Navbar from "../../components/navbar/navbar";
import Product from "../../components/product/product";
import { Link } from "react-router-dom";

import './productCatalog.css'

const productCatalog = () => {
    return(
        <div className='container-fluid  p-0'>
        <Navbar></Navbar>
        <div className='img-banner-admin p-0'>
          <img
              src="https://www.journeygazer.com/wp-content/uploads/2019/03/Moraine-lake-destination.jpg"/>
        </div>
        <div className='container-fluid'>
        <div className='row'>
          <div className='col-xxl-8 col-12 col-table d-flex justify-content-center order-2 order-xxl-1'>
            <div>
                <div className='table_background shadow'>
                  <div className='container-fluid p-0 '>
                    <div className='row d-flex justify-content-center'>

                      <div className='col-12 d-flex justify-content-xl-center  justify-content-center order-2'>
                        <Link to='/registerProduct'>
                          <button type="button" class="btn btn-admin-profile table-item button-item-det">
                            Añadir Producto
                          </button>
                        </Link>
                      </div>
                      
                      <div className='col-12 table-container  order-5'>
                      <div className="col-12 col-sm-12 row justify-content-center product-items-list">
                            <Product
                              src="http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c0de.png"
                              nombreProducto="Cocacola"
                              precio="6 Bs"
                            ></Product>
                            <Product
                              src="https://camelchile.cl/wp-content/uploads/2021/11/BEBIDA_LATA_PEPSI_350CC-1.png"
                              nombreProducto="Pepsi"
                              precio="5 Bs"
                            ></Product>
                            <Product
                              src="https://www.reinsac.com/wp-content/uploads/2020/06/336978.png"
                              nombreProducto="Inca Kola"
                              precio="8 Bs"
                            ></Product>
                            <Product
                              src="https://www.pngmart.com/files/1/Sprite-Bottle-PNG-File.png"
                              nombreProducto="Sprite"
                              precio="6 Bs"
                            ></Product>
                            <Product
                              src="https://camelchile.cl/wp-content/uploads/2021/11/BEBIDA_LATA_PEPSI_350CC-1.png"
                              nombreProducto="Pepsi"
                              precio="5 Bs"
                            ></Product>
                            <Product
                              src="https://camelchile.cl/wp-content/uploads/2021/11/BEBIDA_LATA_PEPSI_350CC-1.png"
                              nombreProducto="Pepsi"
                              precio="5 Bs"
                            ></Product>
                            <Product
                              src="https://www.pngmart.com/files/1/Sprite-Bottle-PNG-File.png"
                              nombreProducto="Sprite"
                              precio="6 Bs"
                            ></Product>
                            <Product
                              src="https://www.pngmart.com/files/1/Sprite-Bottle-PNG-File.png"
                              nombreProducto="Sprite"
                              precio="6 Bs"
                            ></Product>
                        </div>     
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
          <div className='col-xxl-4 col-12 col-profile order-1 order-xxl-2'>
            <div className='d-flex justify-content-center'>
              <PerfilCard cargo="Administrador"></PerfilCard>
            </div>
            <div className='buttons-colection'>
              <div className='row'>
                {}
                <div className='col-lg-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <Link to="/administrator/adminuser">
                    <button type="button" class="btn btn-admin-profile">Administrar Usuario</button>
                  </Link>
                </div>
                <div className='col-lg-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <Link to="/administrator/admincompany">
                    <button type="button" class="btn btn-admin-profile">Administrar Empresa</button>
                  </Link>
                </div>
                <div className='col-lg-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <Link to="/administrator/productCatalog">
                    <button type="button" class="btn btn-admin-profile">Administrar Producto</button>
                  </Link>
                </div>    
              </div>
            </div>
          </div>
        </div>
        </div>
        <Footer></Footer>
    </div>
    )
} 

export default productCatalog