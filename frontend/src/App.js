import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Home from './pages/Home';
import Ide from './pages/Ide';
import EditorPage from './pages/EditorPage';

function App() {
  return (
    <>
      <div className="App h-lvh">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<Ide />} path="/ide" />
          <Route element={<EditorPage />} path="/editor/:roomId" />

          <Route element={<ProtectedRoutes />}>
            <Route element={<Dashboard />} path="/dashboard" exact />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
