import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import LoginFormPage from "./components/LoginFormPage";
import { useDispatch } from "react-redux";
import * as sessionActions from './store/session'
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import { useSelector } from "react-redux/es/hooks/useSelector";



function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && (
      <Switch>
        <Route exact path='/'>
          {
            sessionUser ? 
            <Dashboard /> : <LandingPage />
          }
        </Route>
      <Route path='/login'>
        <LoginFormPage />
      </Route>
      <Route>
        <SignupFormPage />
      </Route>
    </Switch>
    )}
    
    
    </>
  );
}

export default App;
