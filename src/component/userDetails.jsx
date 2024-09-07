import PropTypes from "prop-types";
import { useState } from "react";

export function UserDetails({ user, setUsers, setCounter }) {
  //const user = props.user;

  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.name);
  const [email, setemail] = useState(user.email);

  return (
    <div>
      <div>
        {!isEditing ? (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        ) : (
          <button
            onClick={() => {
              setUsers((current) => {
                return current.map((currentUser) => {
                  if (currentUser.id === user.id)
                    return { ...currentUser, name: username, email: email };
                  else return currentUser;
                });
              });
              setIsEditing(false);
            }}
          >
            Save
          </button>
        )}

        <button
          onClick={() => {
            setUsers((current) =>
              current.filter((currentUser) => currentUser.id !== user.id)
            );
            setCounter((c) => c - 1);
          }}
        >
          Delete
        </button>
      </div>
      <div key={user.id * 140}>
        <b>Id: </b> <span>{user.id}</span>
        <br />
        <b>Username: </b>{" "}
        {isEditing ? (
          <input
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        ) : (
          <span>{user.name}</span>
        )}
        <br />
        <b>Email: </b>{" "}
        {isEditing ? (
          <input
            name="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        ) : (
          <span>{user.email}</span>
        )}
        <hr />
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
  setCounter: PropTypes.func.isRequired,
};
