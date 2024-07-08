import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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

  const [register, setregister] = useState([]);

  const {state} = useLocation();

  useEffect(() => {
    if(state && state.register){
      setregister(state.register)
    }
    return () => {
      
    };
  }, [state]);

  const isDisabled = !formField.username || formField.password.length < 8 || !formField.displayName ? true : false;

  return (
    
    <form action="" method="post">
      {register.map((reg) =>(
      <div key={1}>
        <h2>{reg.title}</h2>
      </div>
    ))}
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
      <button type="submit" disabled={isDisabled}>Sign Up</button>
    </form>
  );
}
