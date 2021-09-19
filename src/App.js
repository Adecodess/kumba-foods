import ProfilePage from './pages/ProfilePage';
import OrderPage from './pages/OrderPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={ProfilePage} />
          <Route path='/order' component={OrderPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
