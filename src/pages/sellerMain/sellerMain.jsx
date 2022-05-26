import React, {useEffect, useState} from 'react';
import { useProduct  } from '../../components/context/products';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import "./sellerMainView.css"

const SellerMain = () => {
    return(
        <body>
            <header className='hdr-seller'>
                <nav>
                    <h1 className='h1-seller'>TODO LO QUE NECESITAS</h1>
                </nav>
            </header>
            <main>
                <div>
                    <h2 className='h2-seller'>Bienvenido</h2>
                    <h2 className='h2-seller'>Seleccione una marca para elegir productos</h2>
                </div>
                <div className='btn-colection'>
                <button className='btn-seller' type="button" onclick="alert('helllo')">
                     <img src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/cocacola-logo.jpg?alt=media&token=eda01c06-b9de-40be-89a0-c6ef12665e04"></img>
                </button>
                <button className='btn-seller' type="button"> <img src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/mabel_logi.png?alt=media&token=71774bb9-bf31-4a5f-b528-2b0c4d68936c" ></img></button>
                <button className='btn-seller' type="button"> <img src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/delizia_logo.jpg?alt=media&token=c7304b56-3706-4e4b-bb53-15023a85cc91" ></img></button>
                <button className='btn-seller' type="button"> <img src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/arcor.png?alt=media&token=e0003505-5f0a-4b94-a43e-5863c446135c"></img></button>
                <button className='btn-seller' type="button"> <img src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/ola_logo.webp?alt=media&token=9779b8ad-d4ef-4edd-893d-eaeb24b0e3c8" ></img></button>
                <button className='btn-seller' type="button"> <img src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/pil_logo.jpg?alt=media&token=3a274325-3d42-48ab-8574-aa2393059007"></img></button>
                </div>
            </main>
        </body>
    );
}

export default SellerMain