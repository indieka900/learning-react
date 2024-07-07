/* eslint-disable no-unused-vars */
//import { UserProfile } from './component/userProfile'
import styles from "./component/styles.module.css"

import { useState, useEffect } from "react";
import { LoginForm } from "./component/LoginForm";
import { RegisterForm } from "./component/RegisterForm";

import { UserDetails } from "./component/userDetails";
import { RegisterState } from "./component/registerState";
import { Counter } from "./component/counter";
import { PostData } from "./component/postReq";
import { UserContext } from "./utils/context/usercontext";
import { PostContainer } from "./component/PostContainer";

export default function App() {
 
  // const callMe = () => {
  //     console.log("Hello");
  //     <h2>Hello functions</h2>
  // }

  // const mockUsers = [
  //     {
  //         id: 1,
  //         name: "Johnstone Alinyo",
  //         email: "Johny@mail.com"
  //     },
  //     {
  //         id: 2,
  //         name: "Miriam Achieng'",
  //         email: "mirriam@mail.com"
  //     },
  //     {
  //         id: 3,
  //         name: "Jenny Achieng'",
  //         email: "jenny@mail.com"
  //     },
  //     {
  //         id: 4,
  //         name: "Bill Muhamza",
  //         email: "billi@mail.com"
  //     },
  // ]
  // const isAuntendicated = true;
  // const name = 'Joseph';
  // if (isAuntendicated){
  //     return (
  //         <div>
  //             <h1>Welcome User</h1>
  //         </div>
  //     )
  // }
  // else {
  //     return (
  //         <div>
  //             <h2>You&apos;re  not logged in</h2>
  //         </div>
  //     )
  // }
  useEffect(()=> {
    document.title = "Joseph Learning React"
});
  /*return (
        isAuntendicated && name == "Joseph" ?
        <div>
           <h1>Welcome {name}</h1>  
        </div>
        :
        <div>
            <h2>You&apos;re  not logged in</h2>
        </div>
    )*/
  /*return <div>
        { <h1> New component</h1> }
        { <UserProfile  }
        { age={13} username="Joseph I" callMe = {callMe}
        favoriteFoods = {[
            {
                name: "Ugali",
                id: "qwer"
            },
            {
                name: "Samaki",
                id: "smk"
            }
        ]}
        /> }
        {mockUsers.map((user) => {
            return <UserDetails key={user.id * 231 + 527} user={user} />
        })}
        
    </div> */
  return (
    <UserContext.Provider value={{
      id: 1,
      username: "Joseph",
      email: "indiekaj@mail.c"
    }}>
      <div>
        <PostContainer/>
      </div>
    </UserContext.Provider>
    //<LoginForm/>
    //<RegisterForm />
    //<RegisterState/>
    //<Counter/>
    //< PostData />
  );
}
