import React from 'react';
import {Link,Route} from 'react-router-dom';
import './App.css';
import Main from './main/Main';
import Abandoned from './abandoned/Abandoned'
import Login from './login/Login';
import CommunityList from './community/CommunityList';
import CommunityWrite from './community/CommunityWrite';

function App() {
  return (
    <div>

        <div className='Bar'>
          <Link className='navbar' to="/home">홈</Link>
          <Link className='navbar' to="/abandoned">키워줘멍</Link>
          <Link className='navbar' to='/bow'>멍멍</Link>
          <Link className='navbar' to='/login'>나의멍</Link>
        </div>
     

        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/home" render={() => <Main />} />
        <Route exact path="/abandoned" render={() => <Abandoned />} />
        <Route exact path="/bow" render={() => <CommunityList />} />
        <Route exact path="/community/write" component={CommunityWrite} />
        <Route exact path="/login" render={() => <Login />} />

    </div>
  );
}

export default App;