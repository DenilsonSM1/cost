import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './Componentes/pages/Home';
import NewProject from './Componentes/pages/NewProject';
import Company from './Componentes/pages/Company';
import Contact from './Componentes/pages/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/company">Compania</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/newproject">Novo Projeto</Link></li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newproject' element={<NewProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
