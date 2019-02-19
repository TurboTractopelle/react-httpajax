import React from 'react';


const FilterDisplay =(props)=> {
return (
        <div className="filtering">
            Filtering by id: {props.id}
        </div>
    );
}

export default FilterDisplay;