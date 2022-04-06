import { query } from 'firebase/firestore';
import { useReducer } from 'react';
import { onGetUsers } from './FirebaseConfig.js'
var user='';
var usu;
onGetUsers((query) => {

    query.forEach((doc)=>{
        user = doc.data()
        console.log(user.name, user.email, user.phone, user.typeOfUser)
    })
})
function TableAdministrador() {
    return(
        <table border="1">
            <tbody>
                <tr>
                    <td rowspan="4"> {user.name} </td>
                 </tr>
                 <tr>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>{user.phone}</td>
                </tr>
                <tr>
                    <td>{user.typeOfUser}</td>
                </tr>
            </tbody>
        </table>
    );
}
export default TableAdministrador;