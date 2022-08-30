import './App.css';
// import Create from './components/Create';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Routes,Route } from 'react-router-dom';



function App() {
  return (
    
    
     
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={ <Registration/>} /> 
         </Routes>
       
    
    
      
  );
}

export default App;
