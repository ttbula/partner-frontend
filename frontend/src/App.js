import './index.css';
import Home from './pages/Home';
import Nav from './pages/Nav';
import User from './pages/User';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/nav"} element={<Nav />} />
        <Route path={"/user"} element={<User />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
