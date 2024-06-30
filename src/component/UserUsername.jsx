import React from "react";

/* eslint-disable react/prop-types */
export function UserUsername(props){
    console.log(props.username);
    return (
        <React.Fragment>
            <b>Username: </b>
            <span>{props.username}</span>
        </React.Fragment>
    )
}