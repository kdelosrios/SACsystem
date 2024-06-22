import './App.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home.js';
import Navegation from './components/navegation.jsx';
import './components/graphs/chartStyles.css'
import Register from './components/forms/register.jsx';
import ActsForm from './components/forms/actsForm.jsx';
import ConditionForm from './components/forms/conditionsform.jsx';
import Usuarios from './components/userTable.jsx';

function App() {
  return (
    
    <div className="App" >
      <Navegation /> 
    
    <BrowserRouter>
    <Routes>
    
      <Route path='/home' element={<Home/>}></Route>
      <Route path="/registro" element={<Register />} />
      <Route path="/registro_actos" element={<ActsForm />} />
      <Route path="/registro_condiciones" element={<ConditionForm />} />
      <Route path="/usuarios" element={<Usuarios />} />

    
      </Routes>
    </BrowserRouter>
    
     </div>
      

  );
}

export default App;

