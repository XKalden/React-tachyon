import React from 'react';



// const inputChange = (event) => {
//     return console.log(event);
// }

const seachBox = ({searchChange}) => {
    return (
        <input 
            aira-label="Search Robots"
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="Search Robots" 
            onChange={(e) => searchChange(e)} />
    )
}

export default seachBox;
