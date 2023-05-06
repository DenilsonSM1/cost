import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './Componentes/pages/Home';
import NewProject from './Componentes/pages/NewProject';
import Company from './Componentes/pages/Company';
import Contact from './Componentes/pages/Contact';

import Container from './Componentes/layout/Container';
import Navbar from './Componentes/layout/Navbar';
import Footer from './Componentes/layout/Footer';
import Project from './Componentes/pages/Project';
function App() {
  return (
    <div className="App">
      <Router>

        <Navbar/>

        <Container customClass="min-hight">
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/company' element={<Company />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newproject' element={<NewProject />} />
            <Route path='/project' element={<Project />} />
          </Routes>
        </Container>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
