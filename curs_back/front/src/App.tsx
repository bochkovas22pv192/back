import React from 'react';
import { Routes, Route } from "react-router-dom";
import AuthContext from './components/authContext'
import './css/App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from "./pages/home";
import Curs from "./pages/curs";
import CursTask from "./pages/cursTask";
import Login from "./pages/login";
function App() {

  const [auth, setAuth] = React.useState<boolean>(false);

  return (

    <AuthContext.Provider value={{ auth, setAuth }}>
    <div className='all'>
    <Header />
    <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/curs/:cursId" element={ <Curs /> } />
          <Route path="/curs/task/:lectionsId" element={ <CursTask /> } />
          <Route path="/login" element={ <Login /> } />
    </Routes>
    <Footer />
    </div>

    </AuthContext.Provider>
  );
}

export default App;
