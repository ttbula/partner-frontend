import './index.css';
import Home from './pages/Home';
import User from './pages/User';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {useCookies} from 'react-cookie'

function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const authToken = cookies.AuthToken

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        {authToken && <Route path={"/dashboard"} element={<Dashboard />} />}
       {authToken && <Route path={"/user"} element={<User />} />}
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
