import React from 'react'
import ListUser from '../listItem/listUser'

import './usersTable.css'

const usersTable = () => {

  return (
    <div>
        <div className='col-12'>
          <div className='users-table border'>
              <ListUser />
          </div>
        </div>
    </div>
  )
}

export default usersTable