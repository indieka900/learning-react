import { useState } from "react";

export function RegisterForm() {
  /*const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [displayName, setdisplayName] = useState("");

  const isDisabled = !username || password.length < 8 || !displayName ? true : false;*/

  const [formField, setFormFields] = useState({
    username: "",
    password: "",
    displayName: "",
  });

  return (
    <form action="" method="post">
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formField.username}
          onChange={(e) =>
            setFormFields((currentState) => ({
              ...currentState,
              username: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formField.password}
          onChange={(e) =>
            setFormFields((currentState) => ({
              ...currentState,
              password: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="displayName">Display Name: </label>
        <input
          type="text"
          name="displayName"
          id="displayName"
          value={formField.displayName}
          onChange={(e) =>
            setFormFields((currentState) => ({
              ...currentState,
              displayName: e.target.value,
            }))
          }
        />
      </div>
      {/* <button type="submit" disabled={isDisabled}>Sign Up</button> */}
    </form>
  );
}
