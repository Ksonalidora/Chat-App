// import { Route,Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
// import Login from "./pages/login/login";
// // import { Toaster } from "react-hot-toast";

// // import { useAuthContext } from "./context/AuthContext";
// import SignUp from "./pages/signup/SignUp";

function App() {
  // const [count, setCount] = useState(0)
  // const { authUser } = useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <SignUp /> */}
      <Home />
    </div>
  );
  
}

export default App;
