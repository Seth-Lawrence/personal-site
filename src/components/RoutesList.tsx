import { Route, Routes, Navigate } from 'react-router-dom';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Home from './Home';

function RoutesList() {

  return (
    <Routes>
      <Route path='/skills' element={<Skills />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/about' element={<About />} />
      <Route path='/home' element={<Home />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  );
}

export default RoutesList;
