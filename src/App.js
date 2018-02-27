import React, { Component } from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import EditOnePost from './components/EditOnePost/EditOnePost';
import OneFullPost from './components/OneFullPost/OneFullPost';
// import AboutPost from './containers/AboutPost/AboutPost';
// import Contacts from './containers/Contacts/Contacts';
import Header from './components/Header/Header';
import AllPostWindow from "./components/AllPostWindow/AllPostWindow";
import AddOnePost from "./components/AddOnePost/AddOnePost";
// import GoHome from './containers/GoHome/GoHome';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
        <Switch>
            <Route path="/" exact component={AllPostWindow}/>
            <Route path="/second" exact component={AddOnePost}/>
            {/*<Route path="/third" exact component={AboutPost}/>*/}
            {/*<Route path="/fourth" exact component={Contacts}/>*/}
            <Route path="/post/:id/" component={OneFullPost}/>
            <Route path="/post/:id/" component={EditOnePost}/>
        </Switch>
      </div>
    );
  }
}

export default App;
