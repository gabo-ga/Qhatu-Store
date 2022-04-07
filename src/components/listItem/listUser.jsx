import React, { useEffect, useState } from 'react'
import { onGetUsers } from '../FirebaseConfig'
import { MdMode } from "react-icons/md"
import './listItem.css'

const ListUser = () => {
  const [count, setCount] = useState(0);
  const [userData,setUserData]= useState([]);
  let tableNumber=0;

  useEffect(()=>{
    onGetUsers((querySnapshot) => {
      setUserData(querySnapshot.docs.map((doc) => ({
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
    <div className='container-fluid p-0'>
      {userData?.map(({id,data}) =>( 
        <div className={ ColorSelect(tableNumber) ?'item-list-table row' : 'item-list-table2 row'}
          key={ id }>
          <div className='col-4 item-list-id'>
            { data.name }
          </div>
          <div className='col-6 item-list-data'>
            <p>{ data.email }</p>
            <p>{ data.phone }</p>
            <p>{ data.typeOfUser }</p>
          </div>
          <div className='col-1 d-flex justify-content-end align-items-center'>
            <button className="edit-button"><MdMode size={32}/></button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListUser