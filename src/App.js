import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Site from './components/pages/Site';

function App() {
  return (
<Router>
<Navbar />
<Routes>
<Route exact path="/" element={<Site />} />
<Route path="*" element={<NotFound />} />
</Routes>
</Router>

  );
}

export default App;
