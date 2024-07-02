import { useState } from "react";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [displayName, setdisplayName] = useState("");

  const isDisabled = !username || password.length < 8 || !displayName ? true : false;

  return (
    <form action="" method="post">
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="displayName">Display Name: </label>
        <input
          type="text"
          name="displayName"
          id="displayName"
          value={displayName}
          onChange={(e) => setdisplayName(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isDisabled}>Sign Up</button>
    </form>
  );
}
