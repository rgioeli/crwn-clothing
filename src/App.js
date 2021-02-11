import './App.css';
import React from 'react'
import HomePage from './pages/homepage/homepage'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/ShopPage/shop.component'
import Header from './components/header/header.component'
import SignUpSignIn from './pages/sign-up-sign-in/sign-up-sign-in.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header user={ this.state.currentUser }/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignUpSignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
