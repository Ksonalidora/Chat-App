// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
// import { Toaster } from "react-hot-toast";
// import Login from "./pages/login/login";
import SignUp from "./pages/signup/SignUp";
// import Home from "./pages/home/Home";
function App() {
  // const [count, setCount] = useState(0)
  const { authUser } = useAuthContext();

  return <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp/>}/>
			</Routes>
			<Toaster />
    </div>;
  
}

export default App;
