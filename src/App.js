import {BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './Pages/Login'
import Chat from './Pages/Chat'
import Profile from './Pages/Profile'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Login}/>
      <Route exact path="/chat" component={Chat}/>
      <Route exact path="/profile" component={Profile}/>
    </Router>
  );
}

export default App;
