import React from 'react';
import 'tachyons'; 
const Card = ({id, name, email})=>{

    return(
<div className='bg-light-blue br3 tc dib ma2 pa3 grow bw2 shadow-5'>
<img alt="robopic" src={`https://robohash.org/${id}?200x200`}></img>
<h1>{name}</h1>
<p>
{email}
</p>
</div>
    );
}
export default Card;