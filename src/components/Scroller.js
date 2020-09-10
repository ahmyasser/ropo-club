import React from 'react';

const Scroller = ({children})=>{
    console.log(                    children);

    return(
    <div style={{overflowY:'scroll',border:'1px solid black', height:'500px'}}>
{children}
</div>

);
}
export default Scroller;