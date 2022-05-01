import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc , query, where} from 'firebase/firestore';

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

// Register user
export const registerUser = (name, email, phone, password, typeOfUser) =>
  addDoc(collection(db,'user'),{name, email, phone, password, typeOfUser});

// Get Users
export const onGetUsers = (callback) =>
  onSnapshot(collection(db,'user'), callback);

// Delete user by id
export const deleteUser = id =>
  deleteDoc(doc(db,'user', id));

// Register company
export const registerCompany = (name, address, representativePhone, representativeName) =>
  addDoc(collection(db,'company'),{name, address, representativePhone, representativeName});

//Login User
export const loginUser = (email, password) =>
  query(collection(db,'user'), where('email', '==', email), where('password', '==', password))