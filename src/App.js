
import './App.css';
//import './style.css';
//import Profile from './components/Profile';
//import DynamicVariable  from './components/DynamicVariable';
import AvatarProfile from './components/AvatarProfile';



function App() {
  return (
    <div>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <AvatarProfile person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}} size={100} />
        <ul>
           <li>
            <b>Profession: </b> 
            physicist and chemist
           </li>
           <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Aklilu Lemma</h2>
        <AvatarProfile person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh'}} size={100} />
        <ul>
        <li>
            <b>Profession: </b> 
             Pathologist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Right Livelihood Award (1989))
          </li>
          <li>
            <b>Discovered: </b>
            natural treatment to schistosomiasis
          </li>
        </ul>
        
      </section>
      <section className="profile">
        <h2>Lin Lanying</h2>
        <AvatarProfile person={{ name: 'Lin Lanying', imageId: '1bX5QH6'}} size={100} />
        <ul>
        <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
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
