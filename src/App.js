
import './App.css';
//import './style.css';
//import Profile from './components/Profile';
//import DynamicVariable  from './components/DynamicVariable';
import AvatarProfile from './components/AvatarProfile';
import Home from './components/Home';
import RenderingList from './components/RenderingList';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';



function App() {
  return (


    <div>
      <Router>
        <div>
            <nav>
                <ul>
                    <li>
                      <Link to="/"><b>Home</b></Link>
                    </li>
                    <li>
                      <Link to="/avatarprofile"><b>AvatarProfile</b></Link>
                    </li>
                    <li>
                      <Link to="/renderinglist"><b>RenderingList</b></Link>
                    </li>
                </ul>
            </nav>
            <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/avatarprofile" exact Component={AvatarProfile} />
              <Route path="/RenderingList" exact Component={RenderingList} />
            </Routes>

        </div>
      </Router>

    </div>

    // <div>
    //  <section style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
    //     <h1> Best scientist </h1>
    //     <Profile />
    //   </section>
    //    <div>
    //        <DynamicVariable />
    //    </div>
    // </div>
 

  );
}

export default App;
