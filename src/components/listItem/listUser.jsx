import React, { useEffect, useState } from 'react'
import { onGetUsers } from '../FirebaseConfig'
import './listItem.css'

const ListUser = (props) => {
  const [count, setCount] = useState(0);
  const [userData,setUserData]= useState([]);

  useEffect(()=>{
    onGetUsers((querySnapshot) => {
      setUserData(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })))
    });
  },[]);
  const ColorSelect = () => {
    if (props.color == "1"){
      return true
    }else{
      return false
    }
  }
  
  return (
    <div className='container-fluid p-0'>
      {userData?.map(({id,data}) =>(
        <div className={ ColorSelect() ?'item-list-table row' : 'item-list-table2 row'}>
          <div className='col-4 item-list-id'>
            { data.name }
          </div>
          <div className='col-8 item-list-data'>
            <p>{ data.email }</p>
            <p>{ data.phone }</p>
            <p>{ data.typeOfUser }</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListUser