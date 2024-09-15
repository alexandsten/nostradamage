import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NostradamageView from './nostradamage/NostradamageView';
import '../src/fonts/fonts.css';
import NostradamageHome from './nostradamage/NostradamageHome';
import NostradamagePrototype from './nostradamage/NostradamagePrototype';
import NostradamageSub from './nostradamage/NostradamageSub';
import NostradamageAbout from './nostradamage/NostradamageAbout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NostradamageHome />} />
          <Route path="/predictor" element={<NostradamagePrototype />} />
          <Route path="/subscription" element={<NostradamageSub />} />
          <Route path="/about" element={<NostradamageAbout />} />
          <Route path="/nostradamage" element={<NostradamageView />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
