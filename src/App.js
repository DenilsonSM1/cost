import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './Componentes/pages/Home';
import NewProject from './Componentes/pages/NewProject';
import Company from './Componentes/pages/Company';
import Contact from './Componentes/pages/Contact';

import Container from './Componentes/layout/Container';
function App() {
  return (
    <div className="App">
      <Router>

        <div>
          <Link to="/">Home</Link>
          <Link to="/company">Empresa</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/newproject">Novo Projeto</Link>
        </div>

        <Container customClass="min-hight">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/company' element={<Company />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newproject' element={<NewProject />} />
          </Routes>
        </Container>
      </Router>
      <p>footer</p>
    </div>
  );
}

export default App;
