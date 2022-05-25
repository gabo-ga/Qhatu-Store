import React, {useEffect, useState} from 'react';
import { useProduct  } from '../../components/context/products';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import "./sellerMainView.css"

const SellerMain = () => {
    return(
        <body>
            <header>
                <nav>
                    <h1>TODO LO QUE NECESITAS</h1>
                </nav>
            </header>
            <main>
                <div>
                    <h2>Bienvenido</h2>
                    <h2>Seleccione una marca para elegir productos</h2>
                </div>
                <div className='btn-colection'>
                <button type="button" onclick="alert('helllo')">
                     <img src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/cocacola-logo.jpg?alt=media&token=eda01c06-b9de-40be-89a0-c6ef12665e04"></img>
                </button>
                <button type="button"> <img src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/cocacola-logo.jpg?alt=media&token=eda01c06-b9de-40be-89a0-c6ef12665e04" ></img></button>
                <button type="button"> <img src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/cocacola-logo.jpg?alt=media&token=eda01c06-b9de-40be-89a0-c6ef12665e04" ></img></button>
                <button type="button"> <img src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/cocacola-logo.jpg?alt=media&token=eda01c06-b9de-40be-89a0-c6ef12665e04"></img></button>
                <button type="button"> <img src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/cocacola-logo.jpg?alt=media&token=eda01c06-b9de-40be-89a0-c6ef12665e04" ></img></button>
                <button type="button"> <img src="https://firebasestorage.googleapis.com/v0/b/qhatu-store.appspot.com/o/cocacola-logo.jpg?alt=media&token=eda01c06-b9de-40be-89a0-c6ef12665e04"></img></button>
                </div>
            </main>
        </body>
    );
}

export default SellerMain