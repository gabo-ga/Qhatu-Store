import React from 'react'
import EditCompany from '../../components/editCompany/editCompany'

const editCompanyView = () => {
  return (
    <div className="formCont">
            <div >
                <h1 className="titleQhatu text-center">Qhatu Store</h1>
            </div>
            <div className="align-middle">
                <EditCompany></EditCompany>
            </div>
        </div>
  )
}

export default editCompanyView