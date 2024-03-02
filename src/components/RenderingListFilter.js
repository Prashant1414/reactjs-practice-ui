import React from 'react'
import { people  } from '../util/PeopleData';
import getImageURL from '../util/GetImageURL';

  let chemist = [];
  let everyOneElse = [];

  people.forEach(person => {
     if(person.profession === 'chemist'){
        chemist.push(person);
     } else {
        everyOneElse.push(person);
     }
  });
  
  function ListFunction( {title, people} ){
    return(
      <>
        <h2>{ title }</h2>

        {people.map(person => 
           <li key={person.id}>
             <img
                src={getImageURL(person)}
                alt={person.name}
              />
              <p>
                <b>{person.name}</b>
                { ' ' + person.profession + ' '}
                Known for { person.accomplishment}
              </p>
           </li>
        )}
      </>
    );
  }
export default function RenderingListFilter() {

  return (
    <article>
        <h1>Scientists</h1>
        <ListFunction title="Chemist" people={chemist} />
        <ListFunction title="Everyone Else" people={everyOneElse} />
    </article>
  )
}
