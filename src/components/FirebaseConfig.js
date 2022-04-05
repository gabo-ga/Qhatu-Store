import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDUuVEv-hcIC0htFT4nnETtEYDQp7R7ORM',
  authDomain: 'qhatu-store.firebaseapp.com',
  projectId: 'qhatu-store',
  storageBucket: 'qhatu-store.appspot.com',
  messagingSenderId: '311241414333',
  appId: '1:311241414333:web:b1dab6a0e896cfd91c09d4',
  measurementId: 'G-RZTW6GTGLE'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

//Registrar usuarios, reemplazar parametros por los recibidos
const register = (params)=>
  addDoc(collection(db,'user'),{params});
