import { UserProfile } from './component/userProfile'

export default function App(){
    const callMe = () => {
        console.log("Hello");
        <h2>Hello functions</h2>
    }
    return <div>
        <h1> New component</h1>
        <UserProfile 
        age={13} username="Joseph I" callMe = {callMe}
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
        />
        
    </div>
}