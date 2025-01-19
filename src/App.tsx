import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ValentinePage from './components/ValentinePage';
import YesPage from './components/YesPage';

function App() {
  return (
    <BrowserRouter basename="/moonie"> {/* This ensures the base path is handled */}
      <Routes>
        <Route path="/" element={<ValentinePage />} />
        <Route path="/yes" element={<YesPage />} />
        {/* Any other routes you need */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
