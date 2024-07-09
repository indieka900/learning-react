/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

export function UsernameDisplay( {username} ) {
    return (
        <div>
            <span>{username}</span>
        </div>
    );
}

UsernameDisplay.PropTypes = {
    username: PropTypes.string
}

UsernameDisplay.defaultProps = {
    username: "Joseph"
}