import React from 'react'
import Forms from '../../components/Forms/Forms';
import FormsSupv from '../../components/Forms-supv/formsSupv';

import './registrarUsuarioSupv.css'

const registrarUsuarioSupv = () => {
  return (
    <div className="formCont">
        <div >
            <h1 className="titleQhatu text-center">Qhatu Store</h1>
        </div>
        <div className="align-middle">
            <FormsSupv></FormsSupv>
        </div>
    </div>
  )
}

export default registrarUsuarioSupv