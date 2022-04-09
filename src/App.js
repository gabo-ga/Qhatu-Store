import SupervisorProfile from './pages/supervisorProfile/supervisorProfile';
import AdministratorProfile from './pages/administratorProfile/administratorProfile'
import SupervisorProfileUser from './pages/supervisorProfile/supervisorProfileUser';
import AdministratorProfileUser from './pages/administratorProfile/administratorProfileUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/administrator" element={ <AdministratorProfile /> }/>
        <Route exact path="/administrator/adminuser" element={ <AdministratorProfileUser /> }/>
        <Route exact path="/supervisor" element={ <SupervisorProfile /> }/>
        <Route exact path="/supervisor/adminuser" element={ <SupervisorProfileUser /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
