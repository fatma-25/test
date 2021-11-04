
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from './components/navbar'
import Home from './components/views/home'
import Dashboard from './components/views/dashboard'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser } from './redux/action/auth-action';
import PrivateRoute from './components/routes/privateRoute';
import ApprouveUser from './components/views/ApprouveUser'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
 dispatch(getAuthUser())

  }, [])

  const user = useSelector(state => state.auth.user)

  return (
    <div className="App">
        <Router>
     <Navbar/>
  
   <Route exact path='/' component={Home} />

 <PrivateRoute  path='/Dashboard' component={Dashboard}   />

   <PrivateRoute  path='/ApprouveUser' component={ApprouveUser}   />
  
 
     </Router>
    </div>
  );
}

export default App;
