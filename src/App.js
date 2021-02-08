import './App.css';
import HomePage from './pages/homepage/homepage'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Route exact path={'/'}>
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
