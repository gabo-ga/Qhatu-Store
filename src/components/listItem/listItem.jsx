import './listItem.css'

const ListItem = (props) => {
  let tableNumber=0;

  const name=props.name
  const details=props.details
  const date=props.date

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
    <div className=''>
        <div className={ ColorSelect(tableNumber) ?"item-list-table row p-0" : "item-list-table2 row p-0"}>
            <div className="col-4 item-list-id">
                Pedido
            </div>
            <div className="col-8 item-list-data">
                <p>Empresa: {name}</p>
                <p>Detalle: {details}</p>
                <p>Fecha de pedido: {date}</p>
            </div>
        </div>
    </div>
  )
}

export default ListItem