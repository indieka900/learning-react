/* eslint-disable react/prop-types */
import styles from "./styles.module.css"

export function Contact(props){
    var code = props.code ? props.code : 1234;
    // if (props.code){
    //     code = props.code
    // }
    return (
        <>
            <hr />
            <h2>Contact form</h2>
            <p className={styles.username}>Username: {props.username}</p>
            <p>Country code: <b>{code}</b></p>
        </>
    )
   
}