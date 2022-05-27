import React, {useState, useEffect} from 'react';
import { onGetOrders } from '../FirebaseConfig';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import PerfilCard from '../../components/perfilCard/perfilCard';
import Footer from '../../components/fotter/footer'
import Navbar from '../../components/navbar/navbar'

import './listSellerCompanyView.css'

const ListCompanySeller = () => {
  let {name} = useParams();
  const [ordersData,setOrdersData]= useState([]);
  
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
    onGetOrders((querySnapshot) => {
      setOrdersData(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })))
    });
  },[]);

  return (
        <div className='container-fluid  p-0'>
        <Navbar></Navbar>
        <div className='img-banner-suprv'>
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
                    <div className='col-12 table-container  order-5'>
                    <div>
        <div className='col-12'>
          <div className='orders-table border'>
          {ordersData?.map(({id,data}) =>( 
              <div className=''>
              <div className={ ColorSelect(tableNumber) ?"item-list-table row p-0" : "item-list-table2 row p-0"}>
                  <div className="col-4 item-list-id">
                      Empresa: Cola Cola
                  </div>
                  <div className="col-8 item-list-data">
                  <Link to="/seller/addOrder/:id">
                    <button type="button" className="btn-seller">Hacer Pedido</button>
                  </Link>
                  </div>
              </div>
          </div>
          ))}
          </div>
        </div>
    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xxl-4 col-12 col-profile order-1 order-xxl-2 '>
            <div className='d-flex justify-content-center'>
              <PerfilCard cargo="Vendedor" name={name}></PerfilCard>
            </div>
            <div className='buttons-colection'>
              <div className='row'>
                <div className='col-xl-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <Link to="/seller/companies">
                    <button type="button" class="btn btn-sllr-profile">Catalogo de empresas</button>
                  </Link>
                  <Link to='/seller'>
                    <button type="button" className='btn btn-sllr-profile'> Pedidos</button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
        <Footer></Footer>
    </div>
    );
    
}

export default ListCompanySeller
