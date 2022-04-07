import React, { useState } from 'react'
import './listItem.css'

const ListItem = (props) => {
  const [count, setCount] = useState(0)

  const ColorSelect = () => {
    if (props.color == "1"){
      return true
    }else{
      return false
    }
  }
  
  return (
    <div className="container-fluid p-0">
        <div className={ ColorSelect() ?"item-list-table row" : "item-list-table2 row"}>
            <div className="col-4 item-list-id">
                PEDIDO #59
            </div>
            <div className="col-8 item-list-data">
                <p>Empresa: Coca cola</p>
                <p>Detalle: Pedido de refesco</p>
                <p>Fecha de pedido: 30/03/2022</p>
            </div>
        </div>
    </div>
  )
}

export default ListItem