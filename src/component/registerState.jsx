import { useState } from "react";
import { UserDetails } from "./userDetails";

export function RegisterState () {
    const [users, setUsers] = useState([
        {
          id: 1,
          name: "Johnstone Alinyo",
          email: "Johny@mail.com",
        },
        {
          id: 2,
          name: "Miriam Achieng'",
          email: "mirriam@mail.com",
        },
        {
          id: 3,
          name: "Jenny Achieng'",
          email: "jenny@mail.com",
        },
        {
          id: 4,
          name: "Bill Muhamza",
          email: "billi@mail.com",
        },
      ]);
      const [formField, setFormFields] = useState({
        username: "",
        email: "",
      });
      const [counter, setCounter] = useState(5)
    return(
        <div>
      <form action="" onSubmit={
        (e) =>{ e.preventDefault();
            const newUser = {
                id: counter,
                name: formField.username,
                email: formField.email,
            };
            //setCounter((c) => c + 1);
            setUsers((c) => [...c, newUser])
        }
      }>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formField.username}
          onChange={(e) =>
            setFormFields((current) => ({
              ...current,
              username: e.target.value,
            }))
          }
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          value={formField.email}
          onChange={(e) =>
            setFormFields((current) => ({ ...current, email: e.target.value }))
          }
        />
        <br />
        <br />
        <button>Add User</button>
        <br />
      </form>

      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers} setCounter = {setCounter} />
      ))}
    </div>
    )
}