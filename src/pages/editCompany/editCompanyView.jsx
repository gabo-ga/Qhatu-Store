import React from 'react'
import EditCompany from '../../components/editCompany/editCompany'
import { useParams } from 'react-router-dom'

const EditCompanyView = () => {
    let params = useParams();
    let {id} = useParams();
  return (
    <div className="formCont">
            <div >
                <h1 className="titleQhatu text-center">Qhatu Store</h1>
            </div>
            <div>

            </div>
            <div className="align-middle">
                <EditCompany id={id}></EditCompany>
            </div>
        </div>
  )
}

export default EditCompanyView