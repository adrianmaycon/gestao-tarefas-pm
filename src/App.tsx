import 'react-toastify/dist/ReactToastify.css';
import 'styles/global.css';
import { ToastContainer } from "react-toastify";
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
// import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Header } from 'components/header';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} /> */}
      </Routes>
      <ToastContainer
          autoClose={2500}
          theme="colored"
          pauseOnHover={false}
          icon
        />
    </div>
  );
}

export default App;
