import React from 'react';


const SearchComponent = ({searchChange}) => {
    return (
        <div>
            <input className="pa2 ba b--blue bg-light-green br2" type="search" placeholder="search Robots" onChange={searchChange}/>
        </div>
    );
}

export default SearchComponent;