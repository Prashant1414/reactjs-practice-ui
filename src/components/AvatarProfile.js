import React from 'react'
import getImageURL from '../util/GetImageURL';
//import '../App.css';

export  function AvatarProfiles({ person, size }) {
  return (
    <img
        className="avatar"
        src={getImageURL(person)}
        alt={person.name}
        width={size}
        height={size}
    />
  );
}

export default function AvatarProfile() {
  return (
    <div>
        <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <AvatarProfiles person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}} size={100} />
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
        <AvatarProfiles person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh'}} size={100} />
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
        <AvatarProfiles person={{ name: 'Lin Lanying', imageId: '1bX5QH6'}} size={100} />
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
  );
}

