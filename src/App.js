
import './App.css';
//import './style.css';
//import Profile from './components/Profile';
//import DynamicVariable  from './components/DynamicVariable';
import AvatarProfile from './components/AvatarProfile';
import Home from './components/Home';
import RenderingList from './components/RenderingList';
import RenderingListFilter from './components/RenderingListFilter';
import RecipeList from './components/RecipeList';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';



function App() {
  return (


    <div>
      <Router>
        <div>
          <div className="sidebar">
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
                    <li>
                      <Link to="/renderinglistfilter"><b>RenderingListFilter</b></Link>
                    </li>
                    <li>
                      <Link to="/recipelist"><b>RecipeList</b></Link>
                    </li>
                </ul>
            </nav>
          </div>
           <div>
            <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/avatarprofile" exact Component={AvatarProfile} />
              <Route path="/renderinglist" exact Component={RenderingList} />
              <Route path='/renderinglistfilter' exact Component={RenderingListFilter} />
              <Route path='/recipelist' exact Component={RecipeList} />
            </Routes>
          </div>
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
