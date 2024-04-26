import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Home from './pages/Home';

function App() {
  return (
    <div className="App h-lvh">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />

        <Route element={<ProtectedRoutes />}>
          <Route element={<Dashboard />} path="/dashboard" exact />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
