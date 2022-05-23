import React, {useState, useEffect} from 'react'
import ListItem from '../listItem/listItem'
import { onGetOrders } from '../FirebaseConfig'

import './usersTable.css'

const UsersTable = () => {
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
    <div>
        <div className='col-12'>
          <div className='users-table border'>
          {ordersData?.map(({id,data}) =>( 
              <div className=''>
              <div className={ ColorSelect(tableNumber) ?"item-list-table row p-0" : "item-list-table2 row p-0"}>
                  <div className="col-4 item-list-id">
                      Pedido
                  </div>
                  <div className="col-8 item-list-data">
                      <p>Empresa: {data.company}</p>
                      <p>Detalle: {data.details}</p>
                      <p>Fecha de pedido: {data.date}</p>
                  </div>
              </div>
          </div>
          ))}
          </div>
        </div>
    </div>
  )
}

export default UsersTable