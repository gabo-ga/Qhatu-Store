import React from 'react'
import ListUser from '../listItem/listUser'
import ListItem from '../listItem/listItem'

import './usersTable.css'

const usersTable = () => {

  return (
    <div>
        <div className='col-12'>
          <div className='users-table border'>
              <ListItem color="1" />
              <ListItem color="2" />
              <ListItem color="1" />
              <ListItem color="2" />
              <ListItem color="1" />
          </div>
        </div>
    </div>
  )
}

export default usersTable