import { UserFavFoods} from './userFavoriteFoods'

export function UserProfile(){
    return <div id="user-profile">
        <p>Username: Joseph</p>
        <div>
            <span>Email: </span>
            <span>Indieka@gm.com</span>
        </div>
        <UserFavFoods />
    </div>
}