import React from 'react';

const SearchBox = ({searchChange})=> {
return(
    <input type="text" className="pa3 ma3 grow ba b--light-blue ba b--dotted " placeholder="search.." onChange={searchChange} />

);

}

export default SearchBox;