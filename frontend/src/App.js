// import { Cards } from '@mui/material';
import './App.css';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
import Cards from './components/Cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cards />}/>
          <Route path='/signin' element={<SignIn />}/>
          {/* <Route path='/signup' element={<SignUp />}/>  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
