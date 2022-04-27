import React, { useEffect, useState } from 'react';
import { onGetUsers } from '../FirebaseConfig';
import { MdMode } from "react-icons/md";
import { deleteUser } from '../FirebaseConfig';

import "./empItemList.css"

const EmpItemList = () => {
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
    <div className="container-fluid p-0">
        <div className={ ColorSelect() ?"item-list-table row p-0" : "item-list-table2 row p-0"}>
            <div className="col-8 d-flex align-items-center">
                <p className='m-0  item-name'>Empresa: Coca cola</p>
            </div>
            <div className="col-2 d-flex align-items-center">
                <img className='img-edit' 
                src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/lapiz.png?alt=media&token=9e834e4f-8b4d-42af-bf4a-ef08deae3cd0" 
                alt="" />
            </div>
            <div className="col-2 d-flex align-items-center">
                <img className='img-del'
                src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/basurero.png?alt=media&token=5378bed1-9615-4b17-8d70-942ed0829678"
                alt="" />
            </div>
        </div>
    </div>
  );
}

export default EmpItemList