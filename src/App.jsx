import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage_temp';
import LoginPage from './pages/LoginPages';
import AdminLayout from './components/AdminLayout';
import DashboardPage from './pages/DashboardPage';
import KriteriaPage from './pages/KriteriaPage';
import CalonPage from './pages/CalonPage';
import PenilaianPage from './pages/PenilaianPage';
import HasilPage from './pages/HasilPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="kriteria" element={<KriteriaPage />} />
        <Route path="calon" element={<CalonPage />} />
        <Route path="penilaian" element={<PenilaianPage />} />
        <Route path="hasil" element={<HasilPage />} />
      </Route>
    </Routes>
  );
}

export default App;