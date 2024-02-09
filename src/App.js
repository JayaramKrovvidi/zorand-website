import './App.css';
import "tailwindcss/lib/css/preflight.css"
import GlobalStyles from 'styles/GlobalStyles';
import AgencyLandingPage from 'demos/AgencyLandingPage';
import ComponentRenderer from 'ComponentRenderer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          {/* <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
          <Route path="/components/:type/:name" element={<ComponentRenderer />} /> */}
          <Route path="/:pageName" element={<ComponentRenderer />} />
          <Route path="/" element={<AgencyLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
