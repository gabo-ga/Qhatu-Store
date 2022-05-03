import './listItem.css'

const ListItem = (props) => {
  const ColorSelect = () => {
    if (props.color == "1"){
      return true
    }else{
      return false
    }
  }
  
  return (
    <div className=''>
        <div className={ ColorSelect() ?"item-list-table row p-0" : "item-list-table2 row p-0"}>
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