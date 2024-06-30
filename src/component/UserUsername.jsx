import React from "react";

/* eslint-disable react/prop-types */
export function UserUsername(props){
    console.log(props.username);
    return (
        <React.Fragment>
            <b style={{
                fontSize: "32px",
                color: "blue",
                fontFamily: "cursive",
            }}>Username: </b>
            <span>{props.username}</span>
        </React.Fragment>
    )
}