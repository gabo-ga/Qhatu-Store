import React from 'react'
import ListCompany from '../listItem/listCompany'

import './companiesTable.css'

const ListUsersTable = () => {

  return (
    <div>
        <div className='col-12'>
          <div className='companies-table border'>
              <ListCompany />
          </div>
        </div>
    </div>
  )
}

export default ListUsersTable