import React from 'react'
import ListItem from '../listItem/listItem'

import './usersTable.css'

const usersTable = () => {

  return (
    <div>
        <div className='col-12'>
          <div className='users-table border'>
              <ListItem color="1"/>
              <ListItem color="2"/>
          </div>
        </div>
    </div>
  )
}

export default usersTable