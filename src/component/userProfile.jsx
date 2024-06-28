/* eslint-disable react/prop-types */
import { UserFavFoods} from './userFavoriteFoods'
import { UserUsername } from './UserUsername'

export function UserProfile(props){
    var age = props.age + 12;
    return <div id="user-profile">
        <UserUsername username="Joseph I" />
        <b>Age:</b>
        <span>{age} years</span>
        <div>
            <span>Email: </span>
            <span>Indieka@gm.com</span>
        </div>
        <UserFavFoods />
    </div>
}