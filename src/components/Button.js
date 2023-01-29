import React from "react";

export const Button = (props) => {
    return (
        <button className="main-btn btn btn-light btn-lg px-5" onClick={props.click}> {props.value} </button>
    )
}