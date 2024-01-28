import React from 'react'

export function DynamicVariable() {
    const imgURL = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    
  return (
    
    <div>
        <h2> { description } </h2>
      <img 
          className = "avatar"
          src = { imgURL }
          alt = { description }
      />
    </div>
  );
}

export default function Avatar() {
    return (
         <DynamicVariable />
    );

}
