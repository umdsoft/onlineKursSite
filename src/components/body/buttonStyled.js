import React, {Fragment} from 'react';

function ButtonStyled({value}) {
    return (
        <Fragment>
            <button style={buttonStyled}>{value}</button>
        </Fragment>
    );
}

const buttonStyled = {
    outline: "none",
    border: "none",
    background: "#FF8800",
    color: "#fff",
    borderRadius: "6px",
    padding: ".5rem 1rem",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "15px"

};
export default ButtonStyled;