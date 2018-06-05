import React from 'react';
import Cards from './Cards';


const CardList = ({robots}) => {   
    return (
        <div>
            {robots.map((r,i) => <Cards key={i} id={r.id} name={r.name} email={r.email} />)}
        </div>
    )
}





export default CardList;




