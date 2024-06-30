//import { UserProfile } from './component/userProfile'

//import { UserDetails } from "./component/userDetails"

export default function App(){
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
    const isAuntendicated = true;
    const name = 'Joseph';
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
    return (
        isAuntendicated && name == "Joseph" ?
        <div>
           <h1>Welcome {name}</h1>  
        </div>
        :
        <div>
            <h2>You&apos;re  not logged in</h2>
        </div>
    )
    // return <div>
    //     {/* <h1> New component</h1> */}
    //     {/* <UserProfile  */}
    //     {/* age={13} username="Joseph I" callMe = {callMe}
    //     favoriteFoods = {[
    //         {
    //             name: "Ugali",
    //             id: "qwer"
    //         },
    //         {
    //             name: "Samaki",
    //             id: "smk"
    //         }
    //     ]}
    //     /> */}
    //     {mockUsers.map((user) => {
    //         return <UserDetails key={user.id * 231 + 527} user={user} />
    //     })}
        
    // </div>
}