import "./App.css";
import LoginScree from "./LoginScree";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
//import { useStateValue } from './StateProvider'
import React, { useState } from "react";



function App() {
 
  const [userr, setUserr] = useState("");
  console.log(userr);
  return (
    <div>
      <Router>
        {!userr ? (
          <LoginScree onClick={value => setUserr(value)}/>
        ) : (
          <>
            <Switch>
              <Route path="/" exact>
                <Home onClick={value => setUserr(value)}/>
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
