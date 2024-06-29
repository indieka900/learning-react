/* eslint-disable react/prop-types */
import { Contact } from './contact';
import { UserFavFoods} from './userFavoriteFoods'
import { UserUsername } from './UserUsername'

export function UserProfile(props){
    var age = props.age + 12;
    const username = "Joseph I";
    return <div id="user-profile">
        <UserUsername username={username} />
        <b>Age:</b>
        <span>{age} years</span>
        <div>
            <span>Email: </span>
            <span>Indieka@gm.com</span>
        </div>
        <Contact username = {username} code = {500000} />
        <UserFavFoods />
    </div>
}