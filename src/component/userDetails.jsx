import PropTypes from 'prop-types';

export function UserDetails({user}){
    //const user = props.user;
    return (<div key={user.id*140}>
        <b>ID</b> <span>{user.id}</span>
        <br />
        <b>Username</b> <span>{user.name}</span>
        <br/>
        <b>Email: </b> <span>{user.email}</span>
        <hr />
    </div>)
}

UserDetails.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    })
}