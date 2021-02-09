import './App.css';
import HomePage from './pages/homepage/homepage'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/ShopPage/shop.component'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
