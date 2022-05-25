import SupervisorProfile from './pages/supervisorProfile/supervisorProfile';
import AdministratorProfile from './pages/administratorProfile/administratorProfile';
import SupervisorProfileUser from './pages/supervisorProfile/supervisorProfileUser';
import AdministratorProfileUser from './pages/administratorProfile/administratorProfileUser';
import AdministratorProfileCompany from './pages/administratorProfile/administratorProfileCompany';
import RegUserAdm from './pages/RegistrarUsuarioAdm/RegUserAdm';
import RegistrarUsuarioSupv from './pages/registrarUsuarioSupv/registrarUsuarioSupv';
import RegisterCompany from './pages/addCompanyView/registerCompany';
import EditCompanyView from './pages/editCompany/editCompanyView';
import LoginUser from './pages/LoginUser/LoginUser';
import ProductCatalog from './pages/productCatalog/productCatalog';
import AddProduct from './pages/addProduct/AddProduct';
import AddOrder from './pages/addOrder/addOrder';
import SellerMain from './pages/sellerMain/sellerMain';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/administrator" element={ <AdministratorProfile /> }/>
        <Route exact path="/administrator/adminuser" element={ <AdministratorProfileUser /> }/>
        <Route exact path="/administrator/admincompany" element={ <AdministratorProfileCompany /> }/>
        <Route exact path="/administrator/createuser" element={ <RegUserAdm /> }></Route>
        <Route exact path="/administrator/registercompany" element={ <RegisterCompany cargo="administrator"/> }></Route>
        <Route exact path="/supervisor" element={ <SupervisorProfile /> }/>
        <Route exact path="/supervisor/adminuser" element={ <SupervisorProfileUser /> }/>
        <Route exact path="/supervisor/createuser" element={ <RegistrarUsuarioSupv /> }></Route>
        <Route exact path="/supervisor/registercompany" element={ <RegisterCompany cargo="supervisor"/> }></Route>
        <Route exact path="/supervisor/editcompany/:id" element={ <EditCompanyView cargo="supervisor"/> }></Route>
        <Route exact path="/administrator/editcompany/:id" element={ <EditCompanyView cargo="administrator"/> }></Route>
        <Route exact path="/login" element={ <LoginUser></LoginUser> }></Route>
        <Route exact path='/administrator/productCatalog' element={ <ProductCatalog></ProductCatalog> } ></Route>
        <Route exact path="/registerProduct" element={<AddProduct />} />
        <Route exact path="/administrator/addOrder/:id" element={ <AddOrder cargo="administrator" ></AddOrder> } ></Route>
        <Route exact path="/supervisor/addOrder/:id" element={ <AddOrder cargo="supervisor" ></AddOrder> } ></Route>
        <Route exact path="/seller/addOrder/:id" element={ <AddOrder cargo="seller" ></AddOrder> } ></Route>
        <Route exact path="/seller" element={ <SellerMain></SellerMain>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
