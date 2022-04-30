import SupervisorProfile from './pages/supervisorProfile/supervisorProfile';
import AdministratorProfile from './pages/administratorProfile/administratorProfile';
import SupervisorProfileUser from './pages/supervisorProfile/supervisorProfileUser';
import AdministratorProfileUser from './pages/administratorProfile/administratorProfileUser';
import RegUserAdm from './pages/RegistrarUsuarioAdm/RegUserAdm';
import RegistrarUsuarioSupv from './pages/registrarUsuarioSupv/registrarUsuarioSupv';
import RegisterCompany from './pages/addCompanyView/registerCompany';
import EditCompanyView from './pages/editCompany/editCompanyView';
import EmpItemList from './components/listItem/empItemList';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/administrator" element={ <AdministratorProfile /> }/>
        <Route exact path="/administrator/adminuser" element={ <AdministratorProfileUser /> }/>
        <Route exact path="/administrator/createuser" element={ <RegUserAdm /> }></Route>
        <Route exact path="/administrator/registercompany" element={ <RegisterCompany cargo="administrator"/> }></Route>
        <Route exact path="/supervisor" element={ <SupervisorProfile /> }/>
        <Route exact path="/supervisor/adminuser" element={ <SupervisorProfileUser /> }/>
        <Route exact path="/supervisor/createuser" element={ <RegistrarUsuarioSupv /> }></Route>
        <Route exact path="/supervisor/registercompany" element={ <RegisterCompany cargo="supervisor"/> }></Route>
        <Route exact path="/adminsitrator/editcompany/:id" element={ <EditCompanyView cargo="supervisor"/> }></Route>
      </Routes>
      <EmpItemList id="mLR6mHe9LKIoqCpc22HG"></EmpItemList>
    </BrowserRouter>
  );
}

export default App;
