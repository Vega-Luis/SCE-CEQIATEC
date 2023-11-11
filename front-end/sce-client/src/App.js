
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EquipmentMagement from './pages/EquipmentManagement';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={ <Home />} />
        <Route path="/home" element={ <Home />} />
        <Route path="/equipments" element={ <EquipmentMagement/>} />
        <Route path="/users" element={ <UserManagement/>} />
      </Routes>

    </div>
  );
}

export default App;
