import React, { useEffect, useState } from 'react';
import { onGetUsers, deleteUser } from '../FirebaseConfig';
import { MdMode } from "react-icons/md";
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
  
  const handleClick= (id) =>{
    deleteUser(id);
  }

  return (
    <div className="container-fluid p-0">
      {userData?.map(({id,data}) =>( 
        <div className={ ColorSelect(tableNumber) ?"item-list-table row" : "item-list-table2 row"}>
          <div className="col-4 item-list-id">
            { data.name }
          </div>
          <div className="col-6 item-list-data">
            <p>{ data.email }</p>
            <p>{ data.phone }</p>
            <p>{ data.typeOfUser }</p>
          </div>
          <div className="col-1 d-flex justify-content-end align-items-center">
            <button type='button' className="edit-button btn-delete"  data-bs-toggle="modal" data-bs-target={`#delUser-${id}`}><MdMode size={32}/></button>
          </div>   
        <div class="modal fade " id={`delUser-${id}`} tabindex="-1" aria-labelledby={`delUser-${id}`} aria-hidden="true">
                <div className='d-flex d-flex justify-content-center'>
                <div class="modal-dialog modal-body-edit d-flex justify-content-center">
                  <div class="modal-content modal-body-edit">
                    <div class="modal-body  d-flex justify-content-center">
                    <div className='modal-delUser-container'>
                        <div className='row'>
                          <div className='col-12 p-0 text-center '>
                            <div className='modal-del-header'>
                              ¿Seguro que desea eliminar este usuario?
                            </div>
                          </div>
                          <div className='col-12 modal-del-data text-center'>
                            <p>
                              Nombre: {data.name}  
                            </p>
                            <p>
                               Email: {data.email}
                           </p>
                            <p>
                               Telefono: {data.phone}
                           </p>
                            <p>
                               Tipo: {data.typeOfUser}
                           </p>
                          </div>
                          <div className='col-12 d-flex justify-content-evenly modal-del-btns'>
                              <button type="button" class="btn modal-del-btn" data-bs-dismiss="modal"
                              onClick={() => handleClick(id)}
                              >Eliminar</button>
                              <button type="button" class="btn modal-del-btn" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                      </div>
                  </div>
                    </div>
                  </div>
                </div>

                </div>
        </div>
        </div>
        
      ))}
    </div>
  );
}

export default ListUser