import React from 'react'
import getImageURL from '../util/GetImageURL';
//import '../App.css';

export default function AvatarProfile({ person, size }) {
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


