import React from 'react';

function DrawTitle__ ({first,second}) {
    return (
        <div className="underline_function">
        <div>
           <span className="first_title">{first} </span>
            <span className="second_title"> {second}</span>
        </div>
            <div className="underline"></div>
        </div>

    );
}

export default DrawTitle__;