import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Logo from './assets/logo.svg'; // your splash logo
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <img src={Logo} alt="Logo" className="w-40 h-40 animate-pulse" />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
