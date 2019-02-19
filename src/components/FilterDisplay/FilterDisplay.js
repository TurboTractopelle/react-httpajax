import React from 'react';


const FilterDisplay =(props)=> {
return (
        <div className="filtering">
            Filtering by todo id: {props.id}
        </div>
    );
}

export default FilterDisplay;