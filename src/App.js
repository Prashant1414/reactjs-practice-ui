
import './App.css';
import Profile from './components/Profile';
import Avatar  from './components/DynamicVariable';

function App() {
  return (
    <div>
     <section style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        <h1> Best scientist </h1>
        <Profile />
      </section>
       <div>
           <Avatar />
       </div>
    </div>
 

  );
}

export default App;
