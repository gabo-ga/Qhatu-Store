import React from 'react'
import ListCompany from '../listItem/listCompany'
import ListProducto from '../listItem/listProduct'

const AddOrderTable = () => {
  return (
    <div>
        <div className='col-12'>
          <div className='companies-table border'>
              <ListProducto />
          </div>
        </div>
    </div>
  )
}

export default AddOrderTable