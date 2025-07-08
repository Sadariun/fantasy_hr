import { Routes, Route } from 'react-router-dom';
import LayoutPublic from './layouts/LayoutPublic';
import LayoutDashboard from './layouts/LayoutDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import JobBoard from './pages/JobBoard';
import Bestiary from './pages/Bestiary';
import ApplyWizard from './pages/ApplyWizard';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import ContractDetail from './pages/ContractDetail';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<LayoutPublic />}>
        <Route index element={<HomePage />} />
        <Route path="contracts" element={<JobBoard />} />
        <Route path="bestiary" element={<Bestiary />} />
        <Route path="apply" element={<ApplyWizard />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* Protected dashboard */}
      <Route
        element={
          <ProtectedRoute>
            <LayoutDashboard />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="contracts/:id" element={<ContractDetail />} />
      {/* 404 fallback could be added here */}
    </Routes>
  );
}

export default App; 