import React from 'react'
import FormsSupv from '../../components/Forms-supv/formsSupv';

import './registrarUsuarioSupv.css'

const registrarUsuarioSupv = () => {
  return (
    <div className="cont align-middle">
        <div >
            <h1 className="titleQhatu text-center">Qhatu Store</h1>
        </div>
        <div className="formCont align-middle">
            <FormsSupv></FormsSupv>
        </div>
    </div>
  )
}

export default registrarUsuarioSupv