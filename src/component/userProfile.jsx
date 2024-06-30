import PropTypes from 'prop-types';
import { Contact } from './contact';
import { UserFavFoods} from './userFavoriteFoods';
import { UserUsername } from './UserUsername';


export function UserProfile(props){
    var age = props.age + 12;
    props.callMe()
    const username = props.username;
    return <div id="user-profile">
        <UserUsername username={username} />
        <b>Age:</b>
        <span>{age} years</span>
        <div>
            <span>Email: </span>
            <span>Indieka@gm.com</span>
        </div>
        {/* <section>
            <p>{props.favoriteFoods}</p>
        </section> */}
        <Contact username = {username} code = {500000} />
        <UserFavFoods />
    </div>
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number,
    callMe: PropTypes.func.isRequired,
    favoriteFoods: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }))
}