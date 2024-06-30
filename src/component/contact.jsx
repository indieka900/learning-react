/* eslint-disable react/prop-types */
export function Contact(props){
    var code = props.code ? props.code : 1234;
    // if (props.code){
    //     code = props.code
    // }
    return (
        <>
            <hr />
            <h2>Contact form</h2>
            <p>Username: {props.username}</p>
            <p>Country code: <b>{code}</b></p>
        </>
    )
   
}